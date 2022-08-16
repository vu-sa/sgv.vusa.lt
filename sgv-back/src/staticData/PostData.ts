import { PostDto,  } from "../types/Post";
import { Categories } from "./CategoryData";

export const PostData : PostDto []  = [
    {
        title: "Pirmas žingsnis",
        content: "<Parallel>\n<Box>\n<img src=\"https://i.imgur.com/eqOmdR3.jpeg\" style=\"width: 20vw; min-width: 330px;\"/>\n</Box>\n<Box>\n<p><strong>Labas, pirmakurse/-i!</strong></p>\n<p>Sveikinu žengus žingsnį į naują – buvimo studente/-u – etapą!</p>\n<p>Kaskart pradedant kažką nauja kyla daugybė skirtingų klausimų – kiekvienam tenka tai patirti. Bet galiu nudžiuginti – ši pradžia nebus tokia neaiški ir sunki. VU SA Tau parengė <strong>„Studentiško gyvenimo vadovą“</strong>!</p>\n<p>Čia rasi viską, ko Tau gali prireikti Universiteto aplinkos išnarpliojimui bei sklandžiam įsiliejimui į studijų procesą. Nuo svarbiausių <em>deadline’ų</em>, datų, iki Universiteto istorijos, nuo informacijos apie bendrabučius iki patarimų, ką daryti tam tikrose su studijomis susijusiose situacijose.</p>\n<p>Na, o jau susipažinus su studijomis Universitete, greitai atrasi erdves, kuriose galėsi semtis naujų patirčių bei siekti dar didesnio savarankiško tobulėjimo.</p>\n<p>Būk pasiruošęs ir sunkumams – jų kartais būna. Tačiau visos situacijos turi išeitį. O jei kartais ne išsyk pavyks ją rasti – visada gali kreiptis į Vilniaus universiteto Studentų atstovybę!</p>\n<p>Sėkmės studijų pradžioje!</p>\n<p><strong>V</strong>ieningai <strong>U</strong>ž <strong>S</strong>tudentų <strong>A</strong>teitį!</p>\n<p>VU SA prezidentė<br>Neda Žutautaitė</p>\n  </Box>\n</Parallel>",
        priority: 1,
        category: Categories["Pradedam!"], 
        subcategory: "", 
        isSponsored: false,
        moreLink: "",
        facultySpecific: "",
        language: "LT",
    }
]