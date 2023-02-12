function generate() {
    const maleNames = [
        "ADAM", "ALEX", "AARON", "ALAN", "ALBERT", "BOBBY", "BRAD", "BRANDON",
        "BRIAN", "BROWN", "CALVIN", "CARLOS", "CHARLES", "CHRIS", "CHRISTIAN", "DAVID",
        "DANIEL", "DEREK", "DERRICK", "DONATELLO", "EDWARD", "ERIC", "EVAN", "FRANK", "FRED",
        "GARY", "GEORGE", "GLENN", "GORDON", "GRANT", "HAROLD", "HENRY", "JACK", "JACOB",
        "JAMES", "JOE", "JOHN", "JONATHAN", "JOSEPH", "JUSTIN", "KEITH", "KENNETH", "KEVIN",
        "KYLE", "LARRY"
    ]
    const femaleNames = [
        "AALIYAH", "ABBY", "ADA", "ADDISON", "ADRIANA", "AISHA", "ALICIA", "ALLISON",
        "ALYSSA", "AMANDA", "AMBER", "AMELIA", "AMY", "ANA", "ANDREA", "ANGELA", "ANN",
        "ANNA", "ASHLEY", "AURORA", "AVA", "AVERY", "BAILEY", "BEATRICE", "BELLA", "BETH",
        "BETHANY", "BEVERLY", "BIANCA", "BONNIE", "BRITTANY", "BROOKE", "CAMILA", "CAROLINE",
        "CAROLYN", "CATHERINE", "CATHY", "CHARLOTTE", "CHLOE", "CHRISTINE", "CLAIRE", "CORA",
        "COURTNEY", "CRYSTAL", "DAISY", "DANA", "DANIELLE", "DEBORAH", "DELANEY", "DIANA"
    ]
    const generalNames = [
        "AIKE", "AIMAR", "ALAI", "ALÉN", "ALEX", "AMOR", "ANDRE", "ANDY", "ARIEL", "AKIRA",
        "AZUL", "BILLIE", "CHARLIE", "CRIS", "CRUZ", "DANI", "DENIS", "EIDER", "GABY", "GAEL",
        "FRANCIS", "HODEI", "JADE", "LEO", "LUAN", "LUJÁN", "MEL", "MILÁN", "NICKY", "NOA",
        "PARÍS", "PAU", "PAZ", "PHOENIX", "RENÉ", "REYES", "ROBIN", "SASHA", "SOL", "URI",
        "YAEL", "YERAY", "ZOEL", "ZUMAR", "ZURI", "AVERY", "JORDAN", "TAYLOR", "MORGAN", "PARKER"
    ]
    const surnames = [
        "SMITH", "JOHNSON", "WILLIAMS", "JONES", "BROWN", "DAVIS", "MILLER", "WILSON", "MOORE",
        "TAYLOR", "ANDERSON", "THOMAS", "JACKSON", "WHITE", "HARRIS", "MARTIN", "THOMPSON",
        "GARCÍA", "MARTÍNEZ", "RODRÍGUEZ", "PÉREZ", "GONZÁLEZ", "RIVERA", "DÍAZ", "HERNÁNDEZ",
        "LÓPEZ", "RAMÍREZ", "JIMÉNEZ", "SÁNCHEZ", "MENDOZA", "MORENO", "RODRIGUEZ", "GOMEZ",
        "FERNÁNDEZ", "SANTOS", "RUIZ", "ORTIZ", "CASTRO", "CHÁVEZ", "SUÁREZ", "HERRERA", "VARGAS",
        "RAMOS", "GONZALES", "REYES", "BAILEY", "BELL", "BENNETT", "BROOKS", "BRYANT", "BURGESS",
        "BUTLER", "CARPENTER", "CARR", "CARSON", "CHAPMAN", "COOK", "COOPER", "COX", "CRAWFORD",
        "GREEN", "GREGORY", "GRIFFIN", "HALL", "HAMILTON", "HARPER", "HAYES", "HENDERSON", "HENRY",
        "HUDSON", "HUNTER", "JENKINS", "JOHNSON", "JONES", "JORDAN", "KELLY", "KING", "KNIGHT",
        "LEE", "LEWIS", "MARSHALL", "MARTIN", "MASON", "MATTHEWS", "MCDONALD", "MILLER", "MITCHELL",
        "MOORE", "MORGAN", "MORRIS", "MURPHY", "MURRAY", "MYERS", "NELSON", "NICHOLS", "OWENS",
        "PARKER", "PATTERSON", "PAYNE", "PEARSON", "PERKINS", "PETERS", "PHELPS", "PHILLIPS", "PIERCE"
    ]

    function generateSurname() {
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    function generateMaleName() {
        return maleNames[Math.floor(Math.random() * maleNames.length)];
    }

    function generateFemaleName() {
        return femaleNames[Math.floor(Math.random() * femaleNames.length)];
    }

    function generateGeneralName() {
        return generalNames[Math.floor(Math.random() * generalNames.length)];
    }

    const randomNumber = Math.random();

    const nameGenerators = {
        male: generateMaleName,
        female: generateFemaleName,
        general: generateGeneralName
    };

    function updateFullName(gender) {
        const firstName = nameGenerators[gender]();
        let secondName, names;
        if (randomNumber > 0.5) {
            secondName = nameGenerators[gender]();
            names = firstName + ' ' + secondName;
        } else {
            names = firstName;
        }

        const surname1 = generateSurname();
        const surname2 = generateSurname();
        const fullName = names + ' ' + surname1 + ' ' + surname2;
        document.getElementById('name-aleatory').innerHTML =
            "<h2 style='margin-top: 40px;'><b>" + fullName + "</b></h2>";
    }


    document.getElementById('btn-man').addEventListener('click', () => {
        updateFullName('male');
    });

    document.getElementById('btn-woman').addEventListener('click', () => {
        updateFullName('female');
    });

    document.getElementById('btn-general').addEventListener('click', () => {
        updateFullName('general');
    });
}