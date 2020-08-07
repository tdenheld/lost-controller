<template>
	<div ref="frame" style="cursor: none"></div>
</template>

<script>
	export default {
		methods: {
			trail(e) {
				const vm = this;

				[1, 0.9, 0.8, 0.5, 0.1, 5].forEach((i) => {
					const j = (1 - i) * 400;
					const elem = document.createElement('div');
                    elem.className = 'trail';

                    setTimeout(() => {
                        elem.classList.add('is-controller');
                    }, 333);
                    setTimeout(() => {
                        elem.classList.add('is-my');
                    }, 667);

					elem.style.top =
						e.pageY + Math.round(Math.random() * j - j / 2) + 'px';

					elem.style.left =
                        e.pageX + Math.round(Math.random() * j - j / 2) + 'px';

					vm.$refs.frame.appendChild(elem);

					setTimeout(() => {
						vm.$refs.frame.removeChild(elem);
					}, Math.round(Math.random() * i * 1000));
				});
			},
		},
		created() {
            window.addEventListener('mousemove', this.trail);
		},
		destroyed() {
            window.removeEventListener('mousemove', this.trail);
		},
	};
</script>

<style lang="scss">
	@import '@/assets/sass/_settings-tools.scss';

	.trail {
		position: absolute;
		width: 8%;
        height: 8%;
        pointer-events: none;

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: -220px;
			left: -60px;
			background-image: url('../assets/img/lost.png');
			background-repeat: no-repeat;
			background-size: contain;
        }
        
        &.is-controller {
            width: 18%;

            &:after {
                background-image: url('../assets/img/controller.png');
            }
        }

        &.is-my {
            width: 7%;

            &:after {
                background-image: url('../assets/img/my.png');
            }
        }
	}
</style>