import gsap from 'gsap';

export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    })
};

export const fadeInUp = (node1, node2, node3, node4, node5, node6, node7, node8, node9) => {
    gsap.from([node1, node2, node3, node4, node5, node6, node7, node8, node9], {
        y: 60,
        duration: 1,
        delay: 0.6,
        opacity: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.6
        }
    })
};

export const staggerText = (node1, node2, node3, node4, node5, node6, node7, node8) => {
    gsap.from([node1, node2, node3, node4, node5, node6, node7, node8], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    })
};