import $ from 'jquery';

window.jQuery = $;

// Screenshots screen: redirect to selected option's value after changing version in dropdown
$('select[name="archived-screenshots"]').on("change", function(e) {
    window.location.href = e.target.value;
});

//   Add feature for tag auto-navigation with hash in the URL
const scrollTo = (hash) => {
    location.hash = hash;
}


const checkHashAndChangeTab = () => {
    const { hash } = window.location;
    const hashDevice = hash.replace("#", "").split("_")[0]
    const androidTab = document.querySelector('[href="#android_screenshots"]')
    const iosTab = document.querySelector('[href="#ios_screenshots"]')
    const androidContent = document.querySelector("#android_screenshots")
    const iosContent = document.querySelector("#ios_screenshots")
    const contentClasses = ["show", "active"]
    if (hashDevice === "android") {
        // Put tabs correctly
        iosTab.classList.remove("active")
        androidTab.classList.add("active")
        // Show/hide content
        iosContent.classList.remove(...contentClasses)
        androidContent.classList.add(...contentClasses)
        scrollTo(hash)
    } else {
        // Put tabs correctly
        androidTab.classList.remove("active")
        iosTab.classList.add("active")
        // Show/hide content
        androidContent.classList.remove(...contentClasses)
        iosContent.classList.add(...contentClasses)
        scrollTo(hash)
    }
}
checkHashAndChangeTab()