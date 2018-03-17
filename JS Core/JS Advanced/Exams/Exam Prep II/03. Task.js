class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error("Invalid deadline!");
        }
        this._deadline = value;
    }

    get isOverdue() {
        if (this.status === 'Complete') return false;
        return this.deadline < Date.now();
    }

    static  comparator(a, b) {
        if (Task.statusRank === undefined) {
            Object.defineProperty(Task, 'statusRank', {
                value: {
                    'Open': 2,
                    'In Progress': 1,
                    'Complete': 3
                },
                configurable: false,
                enumerable: false,
                writable: false
            });
        }
        let rankA = a.isOverdue ? 0 : Task.statusRank[a.status];
        let rankB = b.isOverdue ? 0 : Task.statusRank[b.status];
        if (rankA - rankB !== 0) {
            return rankA - rankB;
        }
        return a.deadline - b.deadline;
    }

    toString() {
        let statusIcon = '';
        if (this.status === 'Open') {
            statusIcon = '\u2731';
        } else if (this.status === 'In progress') {
            statusIcon = '\u219D';
        } else if (this.status === 'Completed') {
            statusIcon = "\u2714";
        } else if (this.isOverdue) {
            statusIcon = "\u26A0";
        }

        let result = `[${statusIcon}] ${this.title}`;

        if (this.isOverdue) {
            result += ' (overdue)';
        } else if (this.status === 'Complete') {
            //this doesn't do nothing
        } else {
            result += ` (deadline: ${this.deadline})`;
        }

        return result;
    }
}