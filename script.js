
document.addEventListener('DOMContentLoaded', function() {
    // Handle annotation dots hover
    const dots = document.querySelectorAll('.annotation-dot');
    
    dots.forEach(dot => {
        const id = dot.getAttribute('data-id');
        const annotation = document.getElementById(`annotation-${id}`);
        
        if (annotation) {
            dot.addEventListener('mouseenter', function() {
                annotation.style.opacity = '1';
                annotation.style.transform = 'translateY(0)';
            });
            
            dot.addEventListener('mouseleave', function() {
                annotation.style.opacity = '0';
                annotation.style.transform = 'translateY(-10px)';
            });
        }
    });
    
    // Create connecting lines for annotations
    function createLines() {
        const dots = document.querySelectorAll('.annotation-dot');
        
        dots.forEach(dot => {
            const id = dot.getAttribute('data-id');
            const annotation = document.getElementById(`annotation-${id}`);
            
            if (annotation) {
                const line = document.createElement('div');
                line.className = 'annotation-line';
                
                const dotRect = dot.getBoundingClientRect();
                const annotRect = annotation.getBoundingClientRect();
                
                const dotX = dotRect.left + dotRect.width / 2;
                const dotY = dotRect.top + dotRect.height / 2;
                const annotX = annotRect.left + annotRect.width / 2;
                const annotY = annotRect.top + annotRect.height / 2;
                
                const dx = annotX - dotX;
                const dy = annotY - dotY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                line.style.width = `${distance}px`;
                line.style.height = '1px';
                line.style.left = `${dotX}px`;
                line.style.top = `${dotY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                
                document.body.appendChild(line);
            }
        });
    }
    
    // Optional: Add lines connecting dots to annotations
    // Uncommenting this will add connecting lines, but they may need
    // position adjustments based on your specific layout
    // window.addEventListener('load', createLines);
});