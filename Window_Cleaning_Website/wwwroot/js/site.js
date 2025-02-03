$(document).ready(function () {
    // Window Cleaning Calculation
    $("#calculateWindows").click(function () {
        // Retrieve the number of windows entered by the user, defaulting to 0 if empty
        var smallWindows = parseInt($("#smallWindows").val()) || 0;
        var mediumWindows = parseInt($("#mediumWindows").val()) || 0;
        var largeWindows = parseInt($("#largeWindows").val()) || 0;

        // Prevent negative inputs by displaying an alert and stopping the calculation
        if (smallWindows < 0 || mediumWindows < 0 || largeWindows < 0) {
            alert("Please enter valid window quantities (positive numbers only).");
            return;
        }

        // Define the price per window based on size
        var smallPrice = 5;
        var mediumPrice = 8;
        var largePrice = 12;

        // Check if additional services are selected, adding their cost per window if checked
        var screenCleaning = $("#screenCleaning").is(":checked") ? 3 : 0;
        var stainRemoval = $("#stainRemoval").is(":checked") ? 15 : 0;
        var fullCleaning = $("#fullInteriorExterior").is(":checked") ? 5 : 0;

        // Ensure the user enters at least one window for cleaning
        if (smallWindows + mediumWindows + largeWindows === 0) {
            alert("Please enter at least one window to clean.");
            return;
        }

        // Calculate the total cost by multiplying window count with respective price and additional services
        var totalWindows =
            (smallWindows * (smallPrice + screenCleaning + stainRemoval + fullCleaning)) +
            (mediumWindows * (mediumPrice + screenCleaning + stainRemoval + fullCleaning)) +
            (largeWindows * (largePrice + screenCleaning + stainRemoval + fullCleaning));

        // Display the total cost in the respective output field
        $("#totalWindows").val("$" + totalWindows.toFixed(2));
    });

    // Trash Bin Cleaning Calculation
    $("#calculateBins").click(function () {
        // Retrieve the number of trash bins entered by the user, defaulting to 0 if empty
        var oneTimeBins = parseInt($("#oneTimeBins").val()) || 0;
        var monthlyBins = parseInt($("#monthlyBins").val()) || 0;
        var biWeeklyBins = parseInt($("#biWeeklyBins").val()) || 0;

        // Prevent negative inputs by displaying an alert and stopping the calculation
        if (oneTimeBins < 0 || monthlyBins < 0 || biWeeklyBins < 0) {
            alert("Please enter valid bin quantities (positive numbers only).");
            return;
        }

        // Define the price per bin based on the cleaning plan
        var oneTimePrice = 15;
        var monthlyPrice = 10;
        var biWeeklyPrice = 8;

        // Ensure the user enters at least one trash bin for cleaning
        if (oneTimeBins + monthlyBins + biWeeklyBins === 0) {
            alert("Please enter at least one trash bin for cleaning.");
            return;
        }

        // Calculate the total cost based on the plan selected and number of bins
        var totalBins =
            (oneTimeBins * oneTimePrice) +
            (monthlyBins * monthlyPrice) +
            (biWeeklyBins * biWeeklyPrice);

        // Display the total cost in the respective output field
        $("#totalBins").val("$" + totalBins.toFixed(2));
    });
});

// Function to prevent users from entering negative values in input fields
function validateInput(input) {
    if (input.value < 0) {
        input.value = 0; // Automatically reset negative inputs to zero
    }
}
