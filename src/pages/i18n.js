import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
        "hello" : "Hello world!",
        "Hunger Zero":"Hunger Zero" ,
        "Rewards":"Rewards",
        "Community":"Community",
        "Donations":"Donations",
        "Contact Us":"Contact Us",
        "Home":"Home",
        "Submit":"Submit",
        "Upload Image":"Upload Image",
        "Donate Now":"Donate Now",
        "Enter Quantity of donated food":"Enter Quantity of donated food",

    },
  },
  hi: {
    translation: {
        "hello" : "नमस्ते दुनिया!",
        "Hunger Zero":"भूख शून्य" ,
        "Rewards":"पुरस्कार",
        "Community":"समुदाय",
        "Donations":"दान",
        "Contact Us":"संपर्क करें",
        "Home":"घर",
        "Submit":"जमा करना",
        "Upload Image":"तस्विर अपलोड करना",
        "Donate Now":"अभी दान कीजिए",
        "Enter Quantity of donated food":"दान किए गए भोजन की मात्रा दर्ज करें",
        
    },
  },

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;