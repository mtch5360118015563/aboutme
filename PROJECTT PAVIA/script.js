document.addEventListener('DOMContentLoaded', () => {
    
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease-in-out';
        document.body.style.opacity = '1';
    }, 50);

    
    const aboutVideo = document.getElementById('aboutVideo');
    const aboutMusic = document.getElementById('aboutMusic');
    const contactMusic = document.getElementById('contactMusic');
    const musicTrigger = document.getElementById('musicTrigger'); 

    
    const startAllMedia = () => {
        
        if (aboutMusic) {
            aboutMusic.play().then(() => {
                console.log("About music playing");
                removeListeners();
            }).catch(e => console.log("Waiting for interaction..."));
        }

        
        if (contactMusic) {
            contactMusic.play().then(() => {
                console.log("Contact music playing");
                removeListeners();
            }).catch(e => console.log("Waiting for interaction..."));
        }

        
        if (aboutVideo) {
            aboutVideo.play().catch(() => {});
        }
    };

    const removeListeners = () => {
        document.removeEventListener('click', startAllMedia);
        document.removeEventListener('scroll', startAllMedia);
        document.removeEventListener('touchstart', startAllMedia);
    };

    
    document.addEventListener('click', startAllMedia);
    document.addEventListener('scroll', startAllMedia);
    document.addEventListener('touchstart', startAllMedia);

    
    
    if (musicTrigger && contactMusic) {
        musicTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (contactMusic.paused) contactMusic.play();
            else contactMusic.pause();
        });
    }

    
    if (aboutVideo && aboutMusic) {
        aboutVideo.style.cursor = 'pointer'; 
        aboutVideo.addEventListener('click', (e) => {
            e.stopPropagation();
            if (aboutMusic.paused) aboutMusic.play();
            else aboutMusic.pause();
        });
    }

    
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        pill.addEventListener('mouseenter', () => pill.style.transform = 'scale(1.05)');
        pill.addEventListener('mouseleave', () => pill.style.transform = 'scale(1)');
    });
});