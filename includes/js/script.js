// Create a new tour
var tour = new Tour();
 
// Add your steps
tour.addSteps([
  {
    element: "#1", // element selector to show the popover next to;
    title: "Willkommen beim Online-Gleitzeitbogen",
    content: "Hier finden Sie ein Anmeldefenster. In der ersten Zeile tragen Sie Ihren Benutzernamen und in der zweiten Zeile Ihr Passwort ein."
  },
  {
    element: "#2",
    title: "Startseite",
    content: "Sie befinden sich nun auf der Startseite mit Ihren Stammdaten, der Rahmenzeit und einer Kurzübersicht über den aktuellen Monat",
	placement: "left",
  },
  {
    element: "#3",
    title: "Kurzübersicht",
    content: "In der Kurzübersicht finden Sie folgende Angaben: Geleistete Arbeitsstunden sind  Ihre bereits geleisteten Arbeitsstunden im aktuellen Monat. Soll-Arbeitsstunden sind Ihre noch zu leistenden Arbeitsstunden im aktuellen Monat. Zeit-Saldo ist Ihr gesamtes Zeitsaldo für diesen Monat. Urlaubstage sind Ihre zur Verfügung stehenden  Urlaubstage. erfasste Urlaubstage sind Ihre bereits genommenen Urlaubstage Krank-Tage ist die Anzahl Ihrer bisherigen Krankheitstage.",
	placement: "left",
  }
]);
 
// Initialize method on the Tour class. Get's everything loaded up and ready to go.
tour.init();
 
// This starts the tour itself
tour.start();
