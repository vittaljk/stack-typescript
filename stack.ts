export class Stack {
    private items: Array<any>;

    getItems(): Array<any> {
        return this.items;
    }

    setItems(items: Array<any>) {
        this.items = items;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    push(item): void {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            this.items.pop();
        } else {
            throw new Error("Stack underflow!");
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

let st = new Stack();
st.setItems(['(']);
// st.pop()
st.isEmpty();
console.log(st.isEmpty());