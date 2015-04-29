// Instance the tour
var tour = new Tour({
  steps: [
  {
    element: "#1",
    title: "Willkommen",
    content: "Tragen Sie hier bitte Ihren Benutzernamen und in der zweiten Zeile Ihr Passwort ein.",
	placement: "right"
  },
  {
    element: "#2",
    title: "Startseite",
    content: "Sie sich nun auf der Startseite mit Ihren Stammdaten, der Rahmenzeit und einer Kurzübersicht über den aktuellen Monat",
	placement: "top"
  },
   {
    element: "#3",
    title: "Startseite",
    content: "Die Kurzübersicht bietet Ihnen einen Überblick über die wichtigsten Daten.",
	placement: "top"
   },
   {
    element: "#4",
    title: "Eingabe",
    content: "Hier tragen Sie den Beginn Ihrer Arbeitszeit in das erste Feld und Ihr Arbeitszeitende im zweiten Feld ein. Im untersten Textfeld haben Sie die Möglichkeit Bemerkungen (z.B. Homeoffice o.ä.) einzutragen.",
	placement: "right"
   },
   {
    element: "#5",
    title: "Datum wählen",
    content: "Mit einem Klick auf den einzutragenden Tag im Kalender können Sie Ihre Arbeitszeiten für diesen Tag erfassen.",
	placement: "left"
   },
   {
    element: "#arbeitsfrei",
    title: "Status",
    content: "Über das grüne Auswahlfeld haben Sie die Möglichkeit, den jeweiligen Tag z.B. als Urlaubs-, Fortbildungs- oder Krankheitstag zu kennzeichnen.",
	placement: "right"
   },
   {
    element: "#6",
    title: "Erfassen",
    content: "Nach dem Eintragen der Daten klicken Sie auf den Button „Erfassen“, damit Ihre Daten in den Zeiterfassungsbogen übernommen werden können.",
	placement: "bottom"
   },
   {
    element: "#7",
    title: "Löschen",
    content: "Sollten Sie die versehentlich ein Feld ausgefüllt haben, dann klicken Sie auf „Eintrag löschen“ und die Zeiterfassung dieses Tages wird gelöscht.",
	placement: "bottom"
   },
   {
    element: "#8",
    title: "Kalender",
    content: "Hier finden Sie einen Kalender, der eine Übersicht über Ihre Eintragungen liefert. Sie sehen, ob Sie die Daten eingetragen und welchen Status Sie dem jeweiligen Arbeitstag des ausgewählten Monats zugeordnet haben.",
	placement: "top"
   }
]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
tour.restart()
