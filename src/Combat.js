import EntityList from './EntityList';

export default class Combat
{
    /**
     * Initializes a new Combat.
     */
    constructor()
    {
        this.entityList = new EntityList();

        // Current Round In Combat
        this.round = 0;
        // The position within the current round
        this.currentStep = 0;
    }

    /**
     * Go to the next step of combat
     */
    next()
    {
        let nextStep = this.currentStep + 1;

        if (this.entityList.getList()[nextStep]) {
            this.currentStep++;
        } else {
            this.currentStep = 0;
            this.round++;
        }
    }

    step()
    {
        // Get the current Entity
        let entity = this.entityList.getEntity(this.currentStep);

        // Do we have any alerts? Then we'd best show them
        console.log(`${entity.name} has ${entity.alerts.length} alerts`);
        if (entity.hasAlerts()) {
            for (let alert of entity.getAlerts()) {
                let event = new CustomEvent('tracker:alert', {
                    detail: alert
                });
                document.dispatchEvent(event);
                console.log(`Alert: ${alert.toString()}`);
            }
        }
    }

    toString()
    {
        return `Round: ${this.round} Step: ${this.currentStep}`;
    }
}
