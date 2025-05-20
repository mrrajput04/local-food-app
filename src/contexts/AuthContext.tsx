
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Session, User, Subscription } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { getTranslation } from '@/utils/translations';
import { Language, useLanguage } from './LanguageContext'; // Assuming LanguageContext exports Language type

interface AuthContextType {
	user: User | null;
	session: Session | null;
	isLoading: boolean;
	login: (email_param: string, password_param: string) => Promise<void>;
	signUp: (email_param: string, password_param: string, options?: { data: Record<string, any> }) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const { language } = useLanguage() as { language: Language };


	useEffect(() => {
		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
			console.log("Auth state changed:", _event, session);
			setSession(session);
			setUser(session?.user ?? null);
			setIsLoading(false);
			if (_event === 'SIGNED_IN' && session?.user) {
				// Wait for state to update, then navigate
				setTimeout(() => {
					navigate('/profile');
				}, 0);
			} else if (_event === 'SIGNED_OUT') {
				setTimeout(() => {
					navigate('/auth/login');
				}, 0);
			}
		});

		// Check initial session
		supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
			console.log("Initial session:", initialSession);
			setSession(initialSession);
			setUser(initialSession?.user ?? null);
			setIsLoading(false);
		}).catch(error => {
			console.error("Error getting initial session:", error);
			setIsLoading(false);
		});


		return () => {
			subscription?.unsubscribe();
		};
	}, [navigate]);

	const login = async (email_param: string, password_param: string) => {
		setIsLoading(true);
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: email_param,
				password: password_param,
			});
			if (error) throw error;
			// Navigation is handled by onAuthStateChange
		} catch (error: any) {
			console.error("Login error:", error);
			toast({
				title: getTranslation("error", language),
				description: error.message || getTranslation("loginFailed", language),
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	const signUp = async (email_param: string, password_param: string, options?: { data: Record<string, any> }) => {
		setIsLoading(true);
		try {
			const { error } = await supabase.auth.signUp({
				email: email_param,
				password: password_param,
				options
			});
			if (error) throw error;
			toast({
				title: getTranslation("success", language),
				description: getTranslation("accountCreatedCheckEmail", language) || "Account created! Please check your email to verify.",
			});
			// User will be redirected to login or a verification page by Supabase/onAuthStateChange if verification is on
			// If email verification is off, SIGNED_IN event will fire.
		} catch (error: any) {
			console.error("Signup error:", error);
			toast({
				title: getTranslation("error", language),
				description: error.message || getTranslation("signupFailed", language),
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		setIsLoading(true);
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			// Navigation is handled by onAuthStateChange
		} catch (error: any) {
			console.error("Logout error:", error);
			toast({
				title: getTranslation("error", language),
				description: error.message || "Logout failed.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	// Add a new translation key for "accountCreatedCheckEmail"
	// This should be added to your translation files, e.g., src/utils/translations/messages.ts
	// For now, I'll assume it exists or use a fallback.

	return (
		<AuthContext.Provider value={{ user, session, isLoading, login, signUp, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
