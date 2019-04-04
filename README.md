# Project 2 @cmda-minor-web · 2018-2019

## CMD Amsterdam
<img width="1280" alt="Screenshot 2019-04-04 21 08 46" src="https://user-images.githubusercontent.com/32538678/55581802-19808800-571e-11e9-9a24-c6a2ce120069.png">

## De opdracht
De CMD heeft een aantal jaren geleden een website opgericht die is gebouwd met Wordpress. De reden hiervoor is zodat de beheerder eenvoudiger content kan toevoegen zonder enige technische kennis te hebben.

#### Het probleem
Wordpress is een eenvoudige manier om een website te onderhouden. Enige nadelen die hier aan verbonden zijn:

#### Performance
• Het laden van de pagina duurt 4,5 seconden op een snelle verbinding.
• Te veel script worden ingeladen door het aantal plugins wat is geïnstalleerd.
• Er worden te grote afbeeldingen gebruikt die opgeslagen moeten worden.
• Alle afbeeldingen worden tegelijk ingeladen in de website.
• Het CSS bestand is erg groot en een groot gedeelte daarvan wordt niet gebruikt.
• Javascript en CSS zijn niet gecompressed. 
• Er is geen gebruik gemaakt van caching die data kan opvangen zonder opnieuw de data hoeven op te halen.

#### Accessibility
• De links hebben niet altijd een goed contrast om te lezen.
• Viewport meta tag wordt niet goed gebruikt.


Zie hieronder de Audits die is gerund voor de Wordpress pagina.

<img width="1280" alt="Screenshot 2019-04-04 21 16 16" src="https://user-images.githubusercontent.com/32538678/55582104-ebe80e80-571e-11e9-8fbb-2468ce116cdb.png">

## Start van het project
Als eerste ben ik begonnen met het op halen van de data uit de website met behulp van de Wordpress API. Aangezien de data diep is genest in de code, is er geprobeerd om `Regex` te gebruiken. Dit ging niet zo soepel als gehoopt. Vervolgens is er geprobeerd om diverse packages te installeren en te gebruiken. Uiteindleijk kwam ik op de volgende package uit: [Sanitize-HTML](https://www.npmjs.com/package/Sanitize-html). Deze package zorgt er voor dat er heel eenvoudig HTML-elementen opgeschoond kunnen worden. 

#### Nadeel gebruik packages
Ook al is de Sanitize-html erg handig om elementen uit te filteren, blijf je toch nog het probleem hebben dat classes van het element er in blijven. Ook liep ik tegen het probleem op dat bepaalde elementen niet de juiste tags hebben, bijvoorbeeld dat headers een span bleken te zijn.


## Verdere aanpak
Om het probleem toch nog aan te pakken, heb ik besloten om vanuit "Scratch" alles te bouwen. Uiteindelijk heb ik besloten om de `samenwerking` pagina uit te werken en vanaf nul te begonnen met het schrijven van HTML en CSS. 

## Resultaat
Bij het bouwen van het prototype heb ik de volgende punten toegepast in het ontwerp:

#### Performance
• Afbeeldingen verkleind en gecompressed.
• Afbeeldingen laten lazy loaden.
• CSS en Javascript verkleinen.
• Ongebruikte CSS er uit filteren.
• Service-worker toegevoegd aan de website waardoor afbeeldingen, bestanden en pagina's worden opgevangen.
• Ook kan de pagina offline bekeken worden (indien deze eerder is bezocht door de gebruiker).

#### Accessibility
• Geprobeerd om buttons en de belangrijkste content meer naar voren te laten springen.
• De juiste meta tags toevoegen.
• Het kleurcontrast beter toe te passen.

<img width="1280" alt="Screenshot 2019-04-04 21 46 09" src="https://user-images.githubusercontent.com/32538678/55583821-1b007f00-5723-11e9-9380-52f9a65c26cb.png">

## Aanbeveling
Als aanbevling voor de CMD Amsterdam, is om de voorkant van de website te laten bouwen door een front-ender. En om Wordpress te gebruiken als achterkant van de website, namelijk het inladen van de gewenste content en data. 

De reden hiervoor is omdat de plugins die er voor zorgen dat de content en data wordt ingeladen in de website, juist er voor zorgen dat de performance zo laag blijven.
