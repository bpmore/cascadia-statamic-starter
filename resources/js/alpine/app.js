export default () => ({
    init() {
        // stuff here?
    },

    openMenuClass: 'open-menu',
    isMenuOpen: false,
    isModalOpen: false,
    showBar: false,
	lastScrollTop: 0,
    isModalOpen: false,
    isOffcanvasOpen: false,
    activeModal: null,

    toggleModal(id) {
        this.isModalOpen = !this.isModalOpen;
        this.activeModal = this.isModalOpen ? id : null;
    },

    toggleMenu() {
        this.isMenuOpen = this.isMenuOpen ? false : true;
    },

    closeMenu() {
        this.isMenuOpen = false
    },

    openMenu() {
        this.isMenuOpen = true
    },

    handleResize() {
        // console.log('resize')
        if (window.innerWidth >= 1024) {
            // console.log('resize > 1024')
            this.closeMenu()
        }
    },

    openModal($event) {
        this.isModalOpen = true;
    },

    closeModal() {
        this.isModalOpen = false;
        this.activeModal = null;
    },
})
