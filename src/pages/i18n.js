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
        "Your Name": "आपका नाम",
        "Number of Chapattis": "चपाती की संख्या",
        "Quantity (kg) of Rice": "चावल की मात्रा (किग्रा)",
        "Quantity (kg) of Sabzi": "सब्जी की मात्रा (किग्रा)" ,
        "Quantity (kg) of Dal": "दाल की मात्रा (किग्रा)",
        "Name of NGO": "NGO नाम",       
        "Number of plates of food other than one mentioned above": "ऊपर उल्लिखित एक के अलावा भोजन की प्लेटों की संख्या", 
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