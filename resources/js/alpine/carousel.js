import Flickity from 'flickity';
import 'flickity-fade';

export default (autoPlay = false ) => ({
    init() {

		const flkty = new Flickity( this.$refs.carousel, {
			pageDots: false,
			draggable: false,
			contain: true,
            autoPlay: autoPlay,
            fade: true,
			wrapAround: false,
			prevNextButtons: false,
			initialIndex: 0,
		})

        const onSlideChange = index => {
            // console.log({index});
            this.activeIndex = index;
        }

        // bind event listener
        flkty.on( 'change', onSlideChange );
		this.carousel = flkty;


        // trigger resize to get flickity to layout properly
        window.dispatchEvent(new Event('resize'));
    },

	carousel: null,
    activeIndex: 0,

	nextSlide() {
		this.carousel.next()
	},

	prevSlide() {
		this.carousel.previous()
	}
});
