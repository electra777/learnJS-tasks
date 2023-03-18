'use strict';

if (age >= 14 && age <= 90) {
}

if (!(age >= 14 && age <= 90)) {
}

if (age < 14 && age > 90) {
}

if (-1 || 0) alert('first'); // -1 first
if (-1 && 0) alert('second'); // 0
if (null || (-1 && 1)) alert('third'); // 1 third
