/* Find sum of two numbers represented as strings. Do not use Number(string) function in order to convert strings to numbers.
 */

function sum(string1, string2) {
    if (string1.length <= string2.length) {
        shorterSummand = string1;
        longerSummand = string2;
    } else {
        shorterSummand = string2;
        longerSummand = string1;
    }
    shorterSummandDigits = shorterSummand.split("").reverse();
    longerSummandDigits = longerSummand.split("").reverse();

    var result = []
    var indexWhereIncrementRequired = -1
    for (var i = 0; i < longerSummandDigits.length; i++) {
        var isBufferSetNeeded = false;
        var currentIterationResultDigit;
        if (i < shorterSummandDigits.length) {
            currentIterationResultDigit = sumOneDigitNumbers(longerSummandDigits[i], shorterSummandDigits[i]);
            if (currentIterationResultDigit.length === 2) {
                currentIterationResultDigit = currentIterationResultDigit.split("")[1];
                isBufferSetNeeded = true;
            }
        } else {
            currentIterationResultDigit = longerSummandDigits[i];
        }

        if (indexWhereIncrementRequired === i) {
            currentIterationResultDigit = sumOneDigitNumbers(currentIterationResultDigit, "1");
        }
        if (currentIterationResultDigit.length === 2) {
            currentIterationResultDigit = currentIterationResultDigit.split("")[1];
            isBufferSetNeeded = true;
        }

        result[i] = currentIterationResultDigit;

        if (isBufferSetNeeded) {
            indexWhereIncrementRequired = i + 1;
        }

        if ((longerSummandDigits.length - i === 1) && (indexWhereIncrementRequired === longerSummandDigits.length)) {
            result[i + 1] = "1";
        }
    }

    return result.reverse().join("").toString();
}

function sumOneDigitNumbers(stringedDigit1, stringedDigit2) {
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var index1, index2;
    var i = 0;
    while ((!index1 || !index2) && i < digits.length) {
        if (digits[i] === stringedDigit1) {
            index1 = i;
        }
        if (digits[i] === stringedDigit2) {
            index2 = i;
        }
        i++
    }
    return (index1 + index2).toString();
}

module.exports = {
    data: sum
}
