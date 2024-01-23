# Dashboard

Chas, individuell, avancerad webbutveckling
https://chasacademy.instructure.com/courses/289/assignments/1507

# Om uppgiften

I denna uppgift ska du bygga en personlig dashboard som användaren kan ha som startsida i sin webbläsare. Denna dashboard kommer både ha delar som användaren kan anpassa själv samt information som hämtas från API:er.

![](/images/Desktop_-_2.png)
Exempel på design

# Vad du ska göra

### Övergripande krav:

- Uppgiften ska byggas genom HTML, CSS och JavaScript och du får inte använda färdiga ramverk utan det är ren vanilla som gäller.
- Du ska använda JS-bibliotek Axios när du hämtar från externt API (istället för inbyggda fetch). Axios kan installeras via NPM, se https://axios-http.com/Links to an external site.
- Dashboarden ska spara informationen i LocalStorage så att det som ändrats finns kvar när dashboarden öppnas nästa gång
- Designen måste inte följa den mockup som finns i denna uppgiften men försök gärna efterlikna den för att också öva på CSS

### Funktionalitet:

Det finns totalt sju olika delar i dashboarden som behöver byggas. Dessa är markerade i bilden nedan.

![](/images/Desktop_-_3.png)

1. Här ska klockslag och datum synas och klockan ska ändras när tiden ändras utan att sidan laddas om.
2. Rubriken på sidan ska användaren kunna ändra genom att klicka på den. När användaren klickat på rubriken blir den redigerbar och ändringarna sparas direkt.
3. Denna del innehåller länkar som användaren sparat. Användaren kan ta bort länkar (3a) samt lägga till nya (3b). När användaren lägger till nya länkar ska användaren fylla i länken samt en rubrik som denna vill ska synas i dashboarden.

Extra utmaning: Hämta länkens favicon och visa som bild i dashboarden.

4. Här ska vädret i närtid visas. Denna behöver inte se ut exakt som i skissen men det ska vara data som hämtas från något öppet API. För att avgöra vilken stad vädret ska visas för ska browserns geolocation-api användas.

Extra utmaning: Gör så att användaren kan anpassa orten som visas

5. Denna del får du fritt bestämma vad den ska innehålla. Det ska dock vara data från ett externt API och exempelvis kan det vara senaste nyheterna eller aktiekurser.

6. I den här delen ska användaren kunna skriva snabba anteckningar. Tänk en stor textarea bara där det som skrivs sparas hela tiden. Det ska inte finnas flera olika anteckningar utan bara just en yta.

7. När användaren klickar på denna knapp ska en randomiserad bild från Unsplash API hämtas och läggas in som bakgrund på dashboarden.

Extra utmaning: Låt användaren fylla i ett sökord som används för att hitta en randomiserad bild så att det blir inom ett tema som användaren önskar.

### VG-fråga:

Denna del behöver du bara göra om du satsar på VG.

I din readme-fil på github ska du ha med ett resonemang kring din kod. I denna ska du nyanserat resonera kring styrkor och brister i ditt genomförandet, alltså i den kod du utvecklat.

VG-nivån bedöms genom kvalitén på koden i kombination med din förmåga att se just styrkor och brister i den. Detta betyder att om din kod har allt för låg kvalité räcker det inte med resonemang kring det för att rädda upp, men det betyder också att ingen kod behöver vara helt perfekt men det är bra att du själv kan peka på de brister du då ser.

## Din inlämning

Lämna in länk till ett github-repo i Canvas
Obs! Publicera inte någon API-nyckel i ditt repo eller ev hostad sida (säkerhetsrisk). Skriv i ReadME att användaren kan hämta egen nyckel på sidan xxx.

## Resources

- https://axios-http.com/docs/intro
- https://css-tricks.com/backdrop-filter-effect-with-css/
- https://api.chucknorris.io/
- https://opendata.smhi.se/apidocs/metfcst/index.html

## Please enter your api-key from Unsplash to make http-requests in getBkgImage.js

Get your api-key @ https://unsplash.com/documentation#creating-a-developer-account
