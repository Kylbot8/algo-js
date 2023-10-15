let music = ["Mob Choir-99.9", "King Gnu-SPECIALZ", "Metro Boomin, A$AP Rocky, Roisee - Am I Dreaming", "Eminem - Lose Yourself", "Anissa-Wejdene"]

class Humain {
    constructor(nom) {
        this.nom = nom
        this.sante_mentale = 10
        this.changements = 0
        this.feux_rouge = 30
    }
//je me suis basé sur l'exo pokemon afin de créé un humain simplement
    Radio(musique) {
        if (music.includes(musique)) {
            if (musique === "Anissa-Wejdene") {
                this.changements += 1
                this.sante_mentale -= 1
            }
        }
    }
//ici j'instaure le fait de perdre un point de santé mentale ainsi que de monter d'un cran le niveau de changements a chaque écoute de wejdene
    FeuxRouge() {
        this.feux_rouge -= 1
        console.log(`Feu rouge passé, musique écoutée : ${music[this.feux_rouge]}, Feux rouges restants : ${this.feux_rouge}`)
        if (this.feux_rouge === 0) {
            if (this.sante_mentale > 0) {
                console.log(`arrivé à destination en ${this.changements}changements`)
            } else {
                console.log("explosion")
            }
        }
        
        if (this.feux_rouge === -1) {
            this.feux_rouge = music.length - 1
        }
    }
}
const Kylian = new Humain("Kylian")
const trajet = ["Anissa-Wejdene", "Mob Choir-99.9", "King Gnu-SPECIALZ", "Eminem - Lose Yourself"]
Kylian.Radio("Anissa-Wejdene")
Kylian.FeuxRouge()
console.log(Kylian.sante_mentale)
console.log(Kylian.changements)
//la partie qui m'a demandé absolument tout mon temps yavait toujours un mini probeleme quelque part mais grace a mes super camarades vu qu'on la best classe ils ont pu m'expliquer mes erreurs,
//j'ai égalements fait quelques recherches parce que je comprennait pas les problemes d'instance avec la derniere partie mais je n'ai pas trouvé comment reglé le probleme qui fait que la musique
//wejdene est marqué comme undefined meme apres avoir essayé plusieurs methodes
while (Kylian.feux_rouge > 0) {
    for (const musique of trajet) {
        Kylian.Radio(musique)
        Kylian.FeuxRouge()
        console.log(Kylian.sante_mentale)
        console.log(Kylian.changements)
    }
}
//pour cette partie j'ai simplement fait comme lors de l'exercice