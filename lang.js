const translations = {
  de: {
    aboutTitle: "Profil",
    aboutText: "IRechtsanwalt Laurenz Pohl 
Rechtsanwalt Pohl ist seit 2025 in Berlin zur Anwaltschaft zugelassen. Geboren und aufgewachsen in Berlin-Schöneberg, studierte er Rechtswissenschaften an der Universität Potsdam. Sein Rechtsreferendariat absolvierte er im Bezirk des Kammergerichts in Berlin, unter anderem bei den Rechtsanwälten Zimmermann Kaliner Kugler sowie bei einer auf internationales Privatrecht spezialisierten Kanzlei in Timișoara, Rumänien.

Bereits seit 2018 war Rechtsanwalt Pohl in der Kanzlei ZK ² Rechtsanwälte tätig – zunächst als studentische Hilfskraft, später als Diplomjurist und schließlich als Rechtsanwalt. Während dieser Zeit konnte er umfassende praktische Kenntnisse auf dem Gebiet der Strafverteidigung gewinnen.
Neben der Strafverteidigung liegt sein jetziger Tätigkeitsschwerpunkt in der Vertretung in Bußgeldverfahren und im Verkehrsrecht. Rechtsanwalt Pohl steht seinen Mandantinnen und Mandanten mit Fachwissen, Konsequenz und Durchsetzungsstärke zur Seite.

Rechtsanwalt Pohl ist Mitglied im Berliner Anwaltsverein e.V.
",
    menu: ["Profil", "Strafverteidigung", "Kontakt"]
  },
  en: {
    aboutTitle: "About Me",
    aboutText: "I am Laurenz Pohl, a lawyer specialized in immigration law, criminal law, and general civil law. With dedication and precision, I advocate for your rights – personally, competently, and with trust.",
    menu: ["About", "Services", "Contact"]
  },
  fa: {
    aboutTitle: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
    aboutText: "\u0645\u0646 \u0644\u0648\u0631\u0646\u062a\u0633 \u067e\u0648\u0644 \u0647\u0633\u062a\u0645\u060c \u0648\u06a9\u06cc\u0644 \u0645\u062a\u062e\u0635\u0635 \u062f\u0631 \u062d\u0642\u0648\u0642 \u0627\u0642\u0627\u0645\u062a\u060c \u062d\u0642\u0648\u0642 \u06a9\u06cc\u0641\u0631\u06cc \u0648 \u062d\u0642\u0648\u0642 \u0645\u062f\u0646\u06cc. \u0628\u0627 \u062f\u0642\u062a \u0648 \u062a\u0639\u0647\u062f \u0627\u0632 \u062d\u0642\u0648\u0642 \u0634\u0645\u0627 \u062f\u0641\u0627\u0639 \u0645\u06cc\u200c\u06a9\u0646\u0645 \u2014 \u0628\u0647 \u0635\u0648\u0631\u062a \u0641\u0631\u062f\u06cc\u060c \u062d\u0631\u0641\u0647\u200c\u0627\u06cc \u0648 \u0642\u0627\u0628\u0644 \u0627\u0639\u062a\u0645\u0627\u062f.",
    menu: ["\u062f\u0631\u0628\u0627\u0631\u0647", "\u062e\u062f\u0645\u0627\u062a", "\u062a\u0645\u0627\u0633"]
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  const t = translations[lang];
  document.getElementById('title').innerText = t.aboutTitle;
  document.getElementById('about-text').innerText = t.aboutText;

  const menuLinks = document.querySelectorAll('#menu a');
  menuLinks.forEach((link, index) => {
    link.textContent = t.menu[index];
    const href = link.getAttribute('href').split('?')[0];
    link.setAttribute('href', `${href}?lang=${lang}`);
  });

  document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
}

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') || localStorage.getItem('lang') || 'de';
  setLanguage(lang);
};
