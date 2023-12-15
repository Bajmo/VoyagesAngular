export enum ChamberStyle {
    Normal = "⭐⭐⭐",
    Four = "⭐⭐⭐⭐",
    Five = "⭐⭐⭐⭐⭐"
}

export class Tour {
    name: string;
    images: string[];
    destination: string;
    departure: string;
    initialPrice: number;
    finalPrice: number;
    cities: string[];
    places: number;
    chamber: ChamberStyle;
    dining: boolean;
    duration: number;
    possibleDates: Date[];

    private existingChamber: ChamberStyle = ChamberStyle.Normal;

    chamberImpacts: { [key in ChamberStyle]: number } = {
        [ChamberStyle.Normal]: 0,
        [ChamberStyle.Four]: 0.2,
        [ChamberStyle.Five]: 0.3,
    };

    constructor(name: string, images: string[], destination: string, departure: string, initialPrice: number, cities: string[], places: number, duration: number, possibleDates: Date[]) {
        this.name = name;
        this.images = images;
        this.destination = destination;
        this.departure = departure;
        this.initialPrice = initialPrice;
        this.finalPrice = initialPrice;
        this.cities = cities;
        this.places = places;
        this.chamber = ChamberStyle.Normal;
        this.dining = false;
        this.duration = duration;
        this.possibleDates = possibleDates;
    }

    reservePlace() {
        if (this.places > 0) {
            this.places--;
        }
    }

    addDining() {
        if (!this.dining) {
            this.dining = true;
            this.finalPrice += 100;
        }
    }

    removeDining() {
        if (this.dining) {
            this.dining = false;
            this.finalPrice -= 100;
        }
    }

    setChamber(chamber: ChamberStyle) {
        this.existingChamber = this.chamber;

        this.chamber = chamber;

        this.finalPrice -= this.initialPrice * this.chamberImpacts[this.existingChamber];
        this.finalPrice += this.initialPrice * this.chamberImpacts[chamber];
    }
}