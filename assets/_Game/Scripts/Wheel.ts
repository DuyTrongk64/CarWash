import { _decorator, Component, Node,Animation } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Wheel')
export class Wheel extends Component {

    @property({ type: Animation })
    anim: Animation | null = null;

    runTime: number = 0;
    start() {
        //this.anim.stop();
    }


    update(deltaTime: number) {
        this.runTime+= deltaTime;
        if(this.runTime>=4){
            this.anim.stop();
        }
    }
}


