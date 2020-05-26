interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsuscribe: (observer: Observer) => void;
}

class BitCoinPrice implements Subject {
    private observers: Array<Observer> = []

    constructor() {
        const element: HTMLInputElement = document.querySelector("#value");
        element.addEventListener("input", () => {
            this.notify(element.value)
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsuscribe(observer: Observer) {
        const index = this.observers.findIndex(returned_observer => {
            return returned_observer === observer;
        })

        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private element: HTMLElement

    constructor() {
        this.element = document.querySelector("#price");
    }

    update(data: any) {
        this.element.innerText = data;
    }
}

const value = new BitCoinPrice();
const display = new PriceDisplay();

value.subscribe(display);