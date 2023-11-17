import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    // singleton
    private static ins: GameManager;

    public static get Ins(): GameManager {
        return GameManager.ins;
    }

    protected onLoad(): void {
        GameManager.ins = this;
    }

    public endRun: boolean;

    start() {
        this.endRun = false;
    }

    update(deltaTime: number) {

    }
}


