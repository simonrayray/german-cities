var cities = [
"Aachen",
"Aalen",
"Achern",
"Achim",
"Ahaus",
"Ahlen",
"Ahrensburg",
"Aichach",
"Albstadt",
"Alfter",
"Alsdorf",
"Altenburg",
"Amberg",
"Andernach",
"Ansbach",
"Apolda",
"Arnsberg",
"Arnstadt",
"Aschaffenburg",
"Aschersleben",
"Attendorn",
"Augsburg",
"Aurich",
"Backnang",
"Bad Harzburg",
"Bad Hersfeld",
"Bad Homburg vor der Höhe",
"Bad Honnef",
"Bad Kissingen",
"Bad Kreuznach",
"Bad Krozingen",
"Bad Mergentheim",
"Bad Nauheim",
"Bad Neuenahr-Ahrweiler",
"Bad Oeynhausen",
"Bad Oldesloe",
"Bad Rappenau",
"Bad Salzuflen",
"Bad Salzungen",
"Bad Schwartau",
"Bad Soden am Taunus",
"Bad Vilbel",
"Bad Waldsee",
"Bad Zwischenahn",
"Baden-Baden",
"Baesweiler",
"Balingen",
"Bamberg",
"Barsinghausen",
"Baunatal",
"Bautzen",
"Bayreuth",
"Beckum",
"Bedburg",
"Bensheim",
"Bergheim",
"Bergisch Gladbach",
"Bergkamen",
"Berlin",
"Bernau bei Berlin",
"Bernburg (Saale)",
"Biberach an der Riß",
"Bielefeld",
"Bietigheim-Bissingen",
"Bingen am Rhein",
"Bitterfeld-Wolfen",
"Blankenfelde-Mahlow",
"Blieskastel",
"Böblingen",
"Bocholt",
"Bochum",
"Bonn",
"Borken",
"Bornheim",
"Bottrop",
"Bramsche",
"Brandenburg an der Havel",
"Braunschweig",
"Bremen",
"Bremerhaven",
"Bretten",
"Brilon",
"Bruchköbel",
"Bruchsal",
"Brühl",
"Buchholz in der Nordheide",
"Büdingen",
"Bühl",
"Bünde",
"Büren",
"Burg",
"Burgdorf",
"Burgwedel",
"Butzbach",
"Buxtehude",
"Calw",
"Castrop-Rauxel",
"Celle",
"Chemnitz",
"Cloppenburg",
"Coburg",
"Coesfeld",
"Coswig",
"Cottbus",
"Crailsheim",
"Cuxhaven",
"Dachau",
"Darmstadt",
"Datteln",
"Deggendorf",
"Delbrück",
"Delitzsch",
"Delmenhorst",
"Dessau-Roßlau",
"Detmold",
"Deutschlandweit",
"Dietzenbach",
"Dillenburg",
"Dingolfing",
"Dinslaken",
"Ditzingen",
"Döbeln",
"Donaueschingen",
"Dormagen",
"Dorsten",
"Dortmund",
"Dreieich",
"Dresden",
"Duderstadt",
"Duisburg",
"Dülmen",
"Düren",
"Düsseldorf",
"Eberswalde",
"Eckernförde",
"Edewecht",
"Ehingen (Donau)",
"Einbeck",
"Eisenach",
"Eisenhüttenstadt",
"Eislingen/Fils",
"Ellwangen (Jagst)",
"Elmshorn",
"Elsdorf",
"Emden",
"Emmendingen",
"Emmerich am Rhein",
"Emsdetten",
"Enger",
"Ennepetal",
"Eppingen",
"Erding",
"Erftstadt",
"Erfurt",
"Erkelenz",
"Erkrath",
"Erlangen",
"Eschborn",
"Eschweiler",
"Espelkamp",
"Essen",
"Esslingen am Neckar",
"Ettlingen",
"Euskirchen",
"Falkensee",
"Fellbach",
"Filderstadt",
"Flensburg",
"Flörsheim am Main",
"Forchheim",
"Frankenthal (Pfalz)",
"Frankfurt (Oder)",
"Frankfurt am Main",
"Frechen",
"Freiberg",
"Freiburg im Breisgau",
"Freising",
"Freital",
"Freudenstadt",
"Friedberg",
"Friedberg (Hessen)",
"Friedrichsdorf",
"Friedrichshafen",
"Friesoythe",
"Fröndenberg/Ruhr",
"Fulda",
"Fürstenfeldbruck",
"Fürstenwalde/Spree",
"Fürth",
"Gaggenau",
"Ganderkesee",
"Garbsen",
"Gardelegen",
"Garmisch-Partenkirchen",
"Gauting",
"Geesthacht",
"Geestland",
"Geilenkirchen",
"Geislingen an der Steige",
"Geldern",
"Gelnhausen",
"Gelsenkirchen",
"Georgsmarienhütte",
"Gera",
"Geretsried",
"Germering",
"Germersheim",
"Gersthofen",
"Geseke",
"Gevelsberg",
"Gießen",
"Gifhorn",
"Gladbeck",
"Glauchau",
"Goch",
"Göppingen",
"Görlitz",
"Goslar",
"Gotha",
"Göttingen",
"Greifswald",
"Greiz",
"Greven",
"Grevenbroich",
"Griesheim",
"Grimma",
"Gronau (Westf.)",
"Groß-Gerau",
"Groß-Umstadt",
"Gummersbach",
"Günzburg",
"Güstrow",
"Gütersloh",
"Haan",
"Haar",
"Hagen",
"Halberstadt",
"Halle (Saale)",
"Halle (Westf.)",
"Haltern am See",
"Hamburg",
"Hameln",
"Hamm",
"Hamminkeln",
"Hanau",
"Hann. Münden",
"Hannover",
"Haren (Ems)",
"Harsewinkel",
"Haßloch",
"Hattersheim am Main",
"Hattingen",
"Heide",
"Heidelberg",
"Heidenheim an der Brenz",
"Heilbronn",
"Heiligenhaus",
"Heinsberg",
"Helmstedt",
"Hemer",
"Hennef (Sieg)",
"Hennigsdorf",
"Henstedt-Ulzburg",
"Heppenheim (Bergstraße)",
"Herborn",
"Herdecke",
"Herford",
"Herne",
"Herrenberg",
"Herten",
"Herzogenaurach",
"Herzogenrath",
"Hilden",
"Hildesheim",
"Hockenheim",
"Hof",
"Hofheim am Taunus",
"Hohen Neuendorf",
"Homburg",
"Horb am Neckar",
"Hörstel",
"Höxter",
"Hoyerswerda",
"Hückelhoven",
"Hürth",
"Husum",
"Ibbenbüren",
"Idar-Oberstein",
"Idstein",
"Ilmenau",
"Ilsede",
"Ingelheim am Rhein",
"Ingolstadt",
"Iserlohn",
"Isernhagen",
"Itzehoe",
"Jena",
"Jüchen",
"Jülich",
"Kaarst",
"Kaiserslautern",
"Kaltenkirchen",
"Kamen",
"Kamp-Lintfort",
"Karben",
"Karlsfeld",
"Karlsruhe",
"Kassel",
"Kaufbeuren",
"Kehl",
"Kelkheim (Taunus)",
"Kempen",
"Kempten (Allgäu)",
"Kerpen",
"Kevelaer",
"Kiel",
"Kirchheim unter Teck",
"Kitzingen",
"Kleinmachnow",
"Kleve",
"Koblenz",
"Köln",
"Königs Wusterhausen",
"Königsbrunn",
"Königswinter",
"Konstanz",
"Korbach",
"Kornwestheim",
"Korschenbroich",
"Köthen (Anhalt)",
"Krefeld",
"Kreuztal",
"Kulmbach",
"Laatzen",
"Lage",
"Lahr/Schwarzwald",
"Lampertheim",
"Landau in der Pfalz",
"Landsberg am Lech",
"Landshut",
"Langen",
"Langenfeld (Rheinland)",
"Langenhagen",
"Lauf an der Pegnitz",
"Laupheim",
"Leer",
"Lehrte",
"Leichlingen (Rheinland)",
"Leimen",
"Leinfelden-Echterdingen",
"Leipzig",
"Lemgo",
"Lengerich",
"Lennestadt",
"Leonberg",
"Leutkirch im Allgäu",
"Leverkusen",
"Lichtenfels",
"Limbach-Oberfrohna",
"Limburg an der Lahn",
"Lindau (Bodensee)",
"Lindlar",
"Lingen (Ems)",
"Lippstadt",
"Lohmar",
"Löhne",
"Lohne (Oldenburg)",
"Lörrach",
"Lübbecke",
"Lübeck",
"Luckenwalde",
"Lüdenscheid",
"Lüdinghausen",
"Ludwigsburg",
"Ludwigsfelde",
"Ludwigshafen am Rhein",
"Lüneburg",
"Lünen",
"Lutherstadt Eisleben",
"Lutherstadt Wittenberg",
"Magdeburg",
"Maintal",
"Mainz",
"Mannheim",
"Marburg",
"Markkleeberg",
"Marl",
"Mechernich",
"Meckenheim",
"Meerbusch",
"Meinerzhagen",
"Meiningen",
"Meißen",
"Melle",
"Memmingen",
"Menden (Sauerland)",
"Meppen",
"Merseburg",
"Merzig",
"Meschede",
"Mettmann",
"Metzingen",
"Minden",
"Moers",
"Mönchengladbach",
"Monheim am Rhein",
"Moormerland",
"Mörfelden-Walldorf",
"Mosbach",
"Mössingen",
"Mühlacker",
"Mühldorf am Inn",
"Mühlhausen/Thüringen",
"Mühlheim am Main",
"Mülheim an der Ruhr",
"München",
"Münster",
"Nagold",
"Name",
"Naumburg (Saale)",
"Neckarsulm",
"Netphen",
"Nettetal",
"Neu Wulmstorf",
"Neu-Isenburg",
"Neu-Ulm",
"Neubrandenburg",
"Neuburg an der Donau",
"Neufahrn bei Freising",
"Neukirchen-Vluyn",
"Neumarkt in der Oberpfalz",
"Neumünster",
"Neunkirchen",
"Neuruppin",
"Neusäß",
"Neuss",
"Neustadt am Rübenberge",
"Neustadt an der Weinstraße",
"Neustrelitz",
"Neuwied",
"Nidderau",
"Niederkassel",
"Nienburg/Weser",
"Norden",
"Nordenham",
"Norderstedt",
"Nordhausen",
"Nordhorn",
"Nördlingen",
"Northeim",
"Nürnberg",
"Nürtingen",
"Oberhausen",
"Obertshausen",
"Oberursel (Taunus)",
"Oelde",
"Oer-Erkenschwick",
"Offenbach am Main",
"Offenburg",
"Öhringen",
"Olching",
"Oldenburg",
"Olpe",
"Oranienburg",
"Osnabrück",
"Osterholz-Scharmbeck",
"Osterode am Harz",
"Ostfildern",
"Ottobrunn",
"Overath",
"Paderborn",
"Panketal",
"Papenburg",
"Passau",
"Peine",
"Petershagen",
"Pfaffenhofen an der Ilm",
"Pforzheim",
"Pfungstadt",
"Pinneberg",
"Pirmasens",
"Pirna",
"Plauen",
"Plettenberg",
"Porta Westfalica",
"Potsdam",
"Puchheim",
"Pulheim",
"Quedlinburg",
"Quickborn",
"Radebeul",
"Radevormwald",
"Radolfzell am Bodensee",
"Rastatt",
"Rastede",
"Rathenow",
"Ratingen",
"Ravensburg",
"Recklinghausen",
"Rees",
"Regensburg",
"Reinbek",
"Remote",
"Remscheid",
"Remseck am Neckar",
"Rendsburg",
"Reutlingen",
"Rheda-Wiedenbrück",
"Rheinbach",
"Rheinberg",
"Rheine",
"Rheinfelden (Baden)",
"Rheinstetten",
"Riedstadt",
"Riesa",
"Rietberg",
"Rinteln",
"Rödermark",
"Rodgau",
"Ronnenberg",
"Rosenheim",
"Rösrath",
"Rostock",
"Rotenburg (Wümme)",
"Roth",
"Rottenburg am Neckar",
"Rottweil",
"Rudolstadt",
"Rüsselsheim am Main",
"Saalfeld/Saale",
"Saarbrücken",
"Saarlouis",
"Salzgitter",
"Salzkotten",
"Salzwedel",
"Sangerhausen",
"Sankt Augustin",
"Sankt Ingbert",
"Schifferstadt",
"Schleswig",
"Schloß Holte-Stukenbrock",
"Schmallenberg",
"Schönebeck",
"Schorndorf",
"Schortens",
"Schramberg",
"Schwabach",
"Schwäbisch Gmünd",
"Schwäbisch Hall",
"Schwandorf",
"Schwanewede",
"Schwedt/Oder",
"Schweinfurt",
"Schwelm",
"Schwerin",
"Schwerte",
"Schwetzingen",
"Seelze",
"Seevetal",
"Sehnde",
"Seligenstadt",
"Selm",
"Senden",
"Senden",
"Senftenberg",
"Siegburg",
"Siegen",
"Sindelfingen",
"Singen (Hohentwiel)",
"Sinsheim",
"Soest",
"Solingen",
"Soltau",
"Sondershausen",
"Sonneberg",
"Sonthofen",
"Speyer",
"Spremberg",
"Springe",
"Sprockhövel",
"St. Wendel",
"Stade",
"Stadtallendorf",
"Stadthagen",
"Stadtlohn",
"Starnberg",
"Staßfurt",
"Steinfurt",
"Steinhagen",
"Stendal",
"Stolberg (Rheinland)",
"Stralsund",
"Straubing",
"Strausberg",
"Stuhr",
"Stutensee",
"Stuttgart",
"Suhl",
"Sundern (Sauerland)",
"Syke",
"Taunusstein",
"Teltow",
"Tönisvorst",
"Traunreut",
"Traunstein",
"Trier",
"Troisdorf",
"Tübingen",
"Tuttlingen",
"Übach-Palenberg",
"Überlingen",
"Uelzen",
"Uetze",
"Ulm",
"Unna",
"Unterhaching",
"Unterschleißheim",
"Vaihingen an der Enz",
"Varel",
"Vaterstetten",
"Vechta",
"Velbert",
"Verden (Aller)",
"Verl",
"Versmold",
"Viernheim",
"Viersen",
"Villingen-Schwenningen",
"Voerde (Niederrhein)",
"Völklingen",
"Vreden",
"Wachtberg",
"Waghäusel",
"Waiblingen",
"Waldkirch",
"Waldkraiburg",
"Waldshut-Tiengen",
"Wallenhorst",
"Walsrode",
"Waltrop",
"Wandlitz",
"Wangen im Allgäu",
"Warburg",
"Waren (Müritz)",
"Warendorf",
"Warstein",
"Wedel",
"Wedemark",
"Wegberg",
"Weiden in der Oberpfalz",
"Weil am Rhein",
"Weilheim in Oberbayern",
"Weimar",
"Weingarten",
"Weinheim",
"Weinstadt",
"Weißenfels",
"Weiterstadt",
"Werdau",
"Werder (Havel)",
"Werl",
"Wermelskirchen",
"Werne",
"Wernigerode",
"Wertheim",
"Wesel",
"Wesseling",
"Westerstede",
"Westoverledingen",
"Wetter (Ruhr)",
"Wetzlar",
"Weyhe",
"Wiehl",
"Wiesbaden",
"Wiesloch",
"Wildeshausen",
"Wilhelmshaven",
"Willich",
"Winnenden",
"Winsen (Luhe)",
"Wipperfürth",
"Wismar",
"Witten",
"Wittmund",
"Wolfenbüttel",
"Wolfsburg",
"Worms",
"Wülfrath",
"Wunstorf",
"Wuppertal",
"Würselen",
"Würzburg",
"Xanten",
"Zeitz",
"Zerbst/Anhalt",
"Zirndorf",
"Zittau",
"Zossen",
"Zülpich",
"Zweibrücken",
"Zwickau"
];
