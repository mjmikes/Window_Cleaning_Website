$(document).ready(function () {
    // Window Cleaning Calculation
    $("#calculateWindows").click(function () {
        var smallWindows = parseInt($("#smallWindows").val()) || 0;
        var mediumWindows = parseInt($("#mediumWindows").val()) || 0;
        var largeWindows = parseInt($("#largeWindows").val()) || 0;

        // Prevent negative inputs
        if (smallWindows < 0 || mediumWindows < 0 || largeWindows < 0) {
            alert("Please enter valid window quantities (positive numbers only).");
            return;
        }

        var smallPrice = 5;
        var mediumPrice = 8;
        var largePrice = 12;

        var screenCleaning = $("#screenCleaning").is(":checked") ? 3 : 0;
        var stainRemoval = $("#stainRemoval").is(":checked") ? 15 : 0;
        var fullCleaning = $("#fullInteriorExterior").is(":checked") ? 5 : 0;

        if (smallWindows + mediumWindows + largeWindows === 0) {
            alert("Please enter at least one window to clean.");
            return;
        }

        var totalWindows =
            (smallWindows * (smallPrice + screenCleaning + stainRemoval + fullCleaning)) +
            (mediumWindows * (mediumPrice + screenCleaning + stainRemoval + fullCleaning)) +
            (largeWindows * (largePrice + screenCleaning + stainRemoval + fullCleaning));

        $("#totalWindows").val("$" + totalWindows.toFixed(2));
    });

    // Trash Bin Cleaning Calculation
    $("#calculateBins").click(function () {
        var oneTimeBins = parseInt($("#oneTimeBins").val()) || 0;
        var monthlyBins = parseInt($("#monthlyBins").val()) || 0;
        var biWeeklyBins = parseInt($("#biWeeklyBins").val()) || 0;

        if (oneTimeBins < 0 || monthlyBins < 0 || biWeeklyBins < 0) {
            alert("Please enter valid bin quantities (positive numbers only).");
            return;
        }

        var oneTimePrice = 15;
        var monthlyPrice = 10;
        var biWeeklyPrice = 8;

        if (oneTimeBins + monthlyBins + biWeeklyBins === 0) {
            alert("Please enter at least one trash bin for cleaning.");
            return;
        }

        var totalBins =
            (oneTimeBins * oneTimePrice) +
            (monthlyBins * monthlyPrice) +
            (biWeeklyBins * biWeeklyPrice);

        $("#totalBins").val("$" + totalBins.toFixed(2));
    });
});

// Prevents negative input values
function validateInput(input) {
    if (input.value < 0) {
        input.value = 0;
    }
}
