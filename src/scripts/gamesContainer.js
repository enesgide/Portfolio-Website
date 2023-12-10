// Duplicate game items for the infinite carousel
export const duplicateGames = (games, count) => {
    const startGames = games.slice(0, count);
    const endGames = games.slice(-count);
    return [...endGames, ...games, ...startGames];
}

// Drag games slider
export const handleDrag = () => {

    // Check slider exists
    const slider = document.querySelector(".games-container .slider");
    if (!slider) return console.warn("Slider NOT found");


    // Snap slider into initial position    
    const gapWidth = 5;
    const itemWidth = 150 + gapWidth;
    const numItems = slider.children.length;
    const sliderWidth = numItems * itemWidth - gapWidth;
    console.log("SliderWidth", sliderWidth, numItems);
    slider.scrollLeft = (numItems - 3) / 2 * itemWidth;
    slider.style.scrollBehavior = "smooth"; // Revert to smooth scroll


    // Variables
    let isDown = false;
    let startX;
    let scrollLeft;


    // Functions
    const startDrag = (e) => {        
        isDown = true;
        slider.style.cursor = "grabbing";
        slider.style.scrollBehavior = "auto";
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
    };

    const stopDrag = (e) => {
        if (!isDown) return;
        isDown = false;
        slider.style.scrollBehavior = "smooth";
        slider.style.cursor = 'grab';
        resetScroller(true);
        // Auto align tween
    };
    
    const drag = (e) => {
        if (!isDown) return;   
        e.preventDefault();        

        const change = (e.pageX - startX) * 1.1;
        slider.scrollLeft = scrollLeft - change;      
    };

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("mouseup", stopDrag);
    slider.addEventListener("mouseleave", stopDrag);
    slider.addEventListener("mousemove", drag);


    // Scroll buttons
    const leftButton = document.getElementById("left-btn");
    const rightButton = document.getElementById("right-btn");

    const leftButtonClicked = (e) => {
        console.log("Left");
        slider.scrollLeft = Math.max(0, slider.scrollLeft - itemWidth);
        resetScroller();
    };

    const rightButtonClicked = (e) => {
        console.log("Right");
        slider.scrollLeft = Math.min(itemWidth * numItems - gapWidth, slider.scrollLeft + itemWidth);
        resetScroller();
    };

    leftButton.addEventListener("click", leftButtonClicked)
    rightButton.addEventListener("click", rightButtonClicked)


    // Reset scroller at the end
    const resetScroller = (isDragged) => {  
        // console.log("ResetScroller:", isDown, isDragged);
        if (isDown) return;

        // Note: remember the dupes in gamesList cannot exceed the no. of unique games
        const numDuplicates = 10; // Total dupes: Double the arg in gamesList fn call
        const numOriginals = numItems - numDuplicates;
        console.log(numOriginals);
        
        // console.log("oldScrollLeft", slider.scrollLeft);

        // Reach the start
        if (slider.scrollLeft <= (3 * itemWidth)) {    
             
            slider.style.scrollBehavior = "auto";
            slider.scrollLeft += (numOriginals * itemWidth);

            if (!isDragged) {
                slider.style.scrollBehavior = "smooth";
                slider.scrollLeft -= itemWidth;
            }

        // Reach the end (6: 3 elements fit in container, anchorPoint is on the left side so 3*2)
        } else if (slider.scrollLeft >= sliderWidth - (6 * itemWidth)) {

            slider.style.scrollBehavior = "auto";
            slider.scrollLeft -= (numOriginals * itemWidth);

            if (!isDragged) {
                slider.style.scrollBehavior = "smooth";
                slider.scrollLeft += itemWidth;
            }
        }

        slider.style.scrollBehavior = "smooth";
        console.log("newScrollLeft", slider.scrollLeft);
    };
    
    //slider.addEventListener("scroll", () => resetScroller(false));
}