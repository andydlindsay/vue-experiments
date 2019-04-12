new Vue({
    el: '#app',
    data: {
        playing: false,
        health: {
            monster: 100,
            player: 100
        },
        maxDamage: 10,
        logs: []
    },
    methods: {
        startGame: function() {
            this.playing = true;
            this.health.monster = 100;
            this.health.player = 100;
            this.logs = [];
        },
        attack: function() {
            const playerAttack = genDamage(this.maxDamage);
            const monsterAttack = genDamage(this.maxDamage * 1.75);
            this.health.monster -= playerAttack;
            this.health.player -= monsterAttack;
            this.logResult(playerAttack, monsterAttack);
            this.isGameOver();
        },
        specialAttack: function() {
            const playerAttack = genDamage(this.maxDamage * 2);
            const monsterAttack = genDamage(this.maxDamage * 1.75);
            this.health.monster -= playerAttack;
            this.health.player -= monsterAttack;
            this.logResult(playerAttack, monsterAttack);
            this.isGameOver();
        },
        heal: function() {
            const playerHeal = genDamage(this.maxDamage * 2);
            const monsterAttack = genDamage(this.maxDamage * 1.75);
            this.health.player += playerHeal;
            if (this.health.player > 100) {
                this.health.player = 100;
            }
            this.health.player -= monsterAttack;
            this.logResult(playerHeal, monsterAttack, true);
            this.isGameOver();
        },
        isGameOver: function() {
            if (this.health.monster <= 0) {
                alert('You win!');
                this.playing = false;
            }
            if (this.health.player <= 0) {
                alert('You lose!');
                this.playing = false;
            }
        },
        giveUp: function() {
            alert('You lose!');
            this.playing = false;
        },
        logResult: function(playerAttack, monsterAttack, isHeal) {
            this.logs.push({ message: `MONSTER HITS PLAYER FOR ${monsterAttack}`, entity: 'monster-turn' });
            if (isHeal) {
                this.logs.push({ message: `PLAYER HEALS SELF FOR ${playerAttack}`, entity: 'player-turn' });
            } else {
                this.logs.push({ message: `PLAYER HITS MONSTER FOR ${playerAttack}`, entity: 'player-turn' });
            }
        }
    },
    computed: {
        getPlayerHealth: function() {
            return this.health.player > 0 ? this.health.player : 0;
        },
        getMonsterHealth: function() {
            return this.health.monster > 0 ? this.health.monster : 0;
        }
    }
});

function genDamage(max) {
    return Math.floor(Math.random() * max) + 1;
}
