class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.candidate = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        this.candidate = this.min + Math.round((this.max - this.min) / 2);

        return this.candidate;
    }

    lower() {
        this.setRange(this.min, this.candidate);
    }

    greater() {
        this.setRange(this.candidate, this.max);
    }
}

module.exports = GuessingGame;
