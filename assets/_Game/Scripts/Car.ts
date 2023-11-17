import { _decorator, Component, Node, tween, Vec3 } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Car')
export class Car extends Component {

    count: number = 0;

    start() {
        this.moveTo(new Vec3(0, 0, 7), 4);
    }

    update(deltaTime: number) {

    }

    moveTo(target: Vec3, duration: number): void {
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        tween(this.node)
            .to(duration,
                { position: target },
                { easing: "linear", }
            )
            .start();
    }

}


