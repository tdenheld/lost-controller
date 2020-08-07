<template>
	<div class="full-absolute">
		<div>
			<img v-for="index in 36" :key="'my' + index" src="@/assets/img/my.png" alt="my" class="img s-my" />
		</div>
		<div>
			<img
				v-for="index in 16"
				:key="'controller' + index"
				src="@/assets/img/controller.png"
				alt="controller"
				class="img s-controller"
			/>
		</div>
	</div>
</template>

<script>
	import gsap from 'gsap';
	export default {
		methods: {
			trail() {
				// dots is an array of Dot objects,
				// mouse is an object used to track the X and Y position
				// of the mouse, set with a mousemove event listener below
				var dots = [],
					mouse = {
						x: 0,
						y: 0,
					};

				// The Dot object used to scaffold the dots
				var Dot = function () {
					this.x = 0;
					this.y = 0;
					this.node = (function () {
						var n = document.createElement('div');
						n.className = 'trail';
						document.body.appendChild(n);
						return n;
					})();
				};
				// The Dot.prototype.draw() method sets the position of
				// the object's <div> node
				Dot.prototype.draw = function () {
					this.node.style.left = this.x + 'px';
					this.node.style.top = this.y + 'px';
				};

				// Creates the Dot objects, populates the dots array
				for (var i = 0; i < 64; i++) {
					var d = new Dot();
					dots.push(d);
				}

				// This is the screen redraw function
				function draw() {
					// Make sure the mouse position is set everytime
					// draw() is called.
					var x = mouse.x,
						y = mouse.y;

					// This loop is where all the 90s magic happens
					dots.forEach(function (dot, index, dots) {
						var nextDot = dots[index + 1] || dots[0];

						dot.x = x;
						dot.y = y;
						dot.draw();
						x += (nextDot.x - dot.x) * 0.6;
						y += (nextDot.y - dot.y) * 0.6;
					});
				}

				addEventListener('mousemove', () => {
					mouse.x = event.pageX;
					mouse.y = event.pageY;
				});

				// animate() calls draw() then recursively calls itself
				// everytime the screen repaints via requestAnimationFrame().
				function animate() {
					draw();
					// setTimeout(() => {
					requestAnimationFrame(animate);
					// }, 200);
				}

				// And get it started by calling animate().
				animate();
            },
            timeline() {
                const tl = gsap
				.timeline({
					defaults: {
						opacity: 1,
						duration: 0.4,
						ease: 'power4.out',
					},
				})
				.fromTo(
					'.s-controller',
					{
						opacity: 0,
						y: 30,
					},
					{
						y: 0,
						stagger: 0.02,
						yoyo: true,
						repeat: -1,
					}
				)
				.fromTo(
					'.s-my',
					{
						opacity: 0,
						x: -30,
					},
					{
						stagger: 0.01,
						yoyo: true,
						repeat: -1,
						x: 0,
					}
				);
            }
		},
		mounted() {
			this.timeline();
        },
        created() {
            this.trail();
        },
        destroyed() {
			
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';

	.s-controller {
		@for $i from 0 through 64 {
			&:nth-child(#{$i}) {
				top: 10% + ($i * 2.5);
				left: 10% + ($i * 2);
			}
		}
	}

	.s-my {
		@for $i from 0 through 64 {
			&:nth-child(#{$i}) {
				top: -10% + ($i * 3);
				left: 30%;
			}
		}
	}
</style>