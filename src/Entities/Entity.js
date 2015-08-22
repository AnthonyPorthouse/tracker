export default class Entity
{
    constructor (name)
    {
        this.name = name;
        this.initiative;
        this.alerts = [];
    }

    getInitiative()
    {
        return this.initiative;
    }

    hasAlerts()
    {
        return !!this.alerts.length;
    }

    addAlert(alert)
    {
        this.alerts.push(alert);
    }

    *getAlerts()
    {
        for (let alert of this.alerts) {
            yield alert;

            alert.tick();
            if (alert.getDuration && alert.getDuration() == 0) {
                this.alerts.splice(this.alerts.indexOf(alert), 1);
            }
        }
    }

    toString()
    {
        return `${this.name} (${this.initiative})`;
    }
}
