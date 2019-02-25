export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kind() {
        let ab = this.a + this.b;
        let ac = this.a + this.c;
        let bc = this.b + this.c;
        if (ab <= this.c || ac <= this.b || bc <= this.a) {
            throw new Error('Invalid side values');
        } else if (this.a === this.b && this.b === this.c) {
            return 'equilateral';
        } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
            return 'isosceles';
        } else {
            return 'scalene';
        }
    }
}
