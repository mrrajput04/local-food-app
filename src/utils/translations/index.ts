

// Main index file that combines all translations and exports the getTranslation function
import { commonTranslations } from './common';
import { productTranslations } from './products';
import { farmTranslations } from './farms';
import { homeTranslations } from './home';
import { pickupTranslations } from './pickup';
import { subscriptionTranslations } from './subscription';
import { accountTranslations } from './account';
import { profileTranslations } from './profile';
import { messageTranslations } from './messages';
import { footerTranslations } from './footer';
import { orderTranslations } from './orders';
import { inventoryTranslations } from './inventory';

// Combine all translation objects
export const translations = {
    ...commonTranslations,
    ...productTranslations,
    ...farmTranslations,
    ...homeTranslations,
    ...pickupTranslations,
    ...subscriptionTranslations,
    ...accountTranslations,
    ...profileTranslations,
    ...messageTranslations,
    ...footerTranslations,
    ...orderTranslations,
    ...inventoryTranslations
};

// Function to get translations
export function getTranslation(key: string, language: string): string {
    if (!translations[key as keyof typeof translations]) {
        console.warn(`Translation key "${key}" not found`);
        return key;
    }

    const translationObj = translations[key as keyof typeof translations];
    if (!translationObj[language as keyof typeof translationObj]) {
        console.warn(`Translation for key "${key}" in language "${language}" not found`);
        return translationObj.english || key;
    }

    return translationObj[language as keyof typeof translationObj];
}

// Export all translation objects for direct access if needed
export {
    commonTranslations,
    productTranslations,
    farmTranslations,
    homeTranslations,
    pickupTranslations,
    subscriptionTranslations,
    accountTranslations,
    profileTranslations,
    messageTranslations,
    footerTranslations,
    orderTranslations,
    inventoryTranslations
};