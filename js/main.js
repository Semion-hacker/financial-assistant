document.getElementById('davaToday').valueAsDate = new Date();
let history = document.querySelector('.simplebar-content');

let registBg = document.querySelector('.background_registration_modal_window');
let entranceBg = document.querySelector('.background_login_modal_window');

let incomeBg = document.querySelector('.background_income_form');
let expenseBg = document.querySelector('.background_expense_form');

let switchToLogin = document.querySelector('.login_button_registration');
let switchToRegist = document.querySelector('.registration_button');

let registerBut = document.querySelector('.submit_button_registration');
let loginBut = document.querySelector('.submit_button');

let emailInputReg = document.querySelector('.email_input_field_registration');
let passwordInputReg = document.querySelector('.password_input_field_registration');
let emailInput = document.querySelector('.email_input_field');
let passwordInput = document.querySelector('.password_input_field');

let validationEmailRg = document.querySelector('.validation_email_rg');
let validationPasswordRg = document.querySelector('.validation_password_rg');
let validationEmail = document.querySelector('.validation_email');
let validationPassword = document.querySelector('.validation_password');

let initialBalance = document.querySelector('.background_initial_balance');

let amountOfMoneyInput = document.querySelector('.amount_of_money_input');
let okButton = document.querySelector('.ok_button');
let balanceQuantity = document.querySelector('.balance_quantity');

let incomeButton = document.querySelector('.income_button');
let consumption_button = document.querySelector('.consumption_button');

let incomeCross = document.querySelector('.income_form_cross');
let expenseCross = document.querySelector('.expense_form_cross');

let vkIcon = document.querySelector('.vk_icon');
let instagramIcon = document.querySelector('.instagram_icon');
let tgIcon = document.querySelector('.tg_icon');
let mailIcon = document.querySelector('.mail_icon');
let viberIcon = document.querySelector('.viber_icon');

let filter1 = document.querySelector('.filter1');
let filter2 = document.querySelector('.filter2');
let filter3 = document.querySelector('.filter3');
let filter4 = document.querySelector('.filter4');
let filter5 = document.querySelector('.filter5');
let filter6 = document.querySelector('.filter6');

let incomeHistoryBlock;
let historyOfConsumptionBlock;
let history_preservation = '';
let meme = document.querySelector('.meme1');
let image = getRandomInt(1, 9);
let account_number;
let balance;

meme.setAttribute('src', `img/meme${getRandomInt(1, 9)}.jpg`);

vkIcon.addEventListener('click', () => {
    document.location='https://vk.com/';
})
instagramIcon.addEventListener('click', () => {
    document.location='https://www.instagram.com/';
})
tgIcon.addEventListener('click', () => {
    document.location='https://telegram.org/';
})
mailIcon.addEventListener('click', () => {
    document.location='https://mail.ru/'
})
viberIcon.addEventListener('click', () => {
    document.location='https://www.viber.com/ru/'
})


filter1.addEventListener('click', () => {
    if (filter1.classList.contains('active')) {
        filter1.style.backgroundColor = '#DADADA';
        filter1.classList.remove('active')
        incomeHistoryBlock = document.querySelectorAll('.income_history_block');
        incomeHistoryBlock.forEach(block => {
            block.style.display = 'none';
        });
    } else {
        filter1.style.backgroundColor = 'white';
        filter1.classList.add('active')
        incomeHistoryBlock = document.querySelectorAll('.income_history_block');
        incomeHistoryBlock.forEach(block => {
            block.style.display = 'flex';
        });
    }
})
filter2.addEventListener('click', () => {
    if (filter2.classList.contains('active')) {
        filter2.style.backgroundColor = '#DADADA';
        filter2.classList.remove('active');
        historyOfConsumptionBlock = document.querySelectorAll('.history_of_consumption_block');
        historyOfConsumptionBlock.forEach(block => {
            block.style.display = 'none';
        });
    } else {
        filter2.style.backgroundColor = 'white';
        filter2.classList.add('active');
        historyOfConsumptionBlock = document.querySelectorAll('.history_of_consumption_block');
        historyOfConsumptionBlock.forEach(block => {
            block.style.display = 'flex';
        });
    }
})
filter3.addEventListener('click', () => {
    if (filter3.classList.contains('active')) {
        filter3.style.backgroundColor = '#DADADA';
        filter3.classList.remove('active');

        document.querySelectorAll('.income_example').forEach(block => {
            block.style.display = 'flex';
        });
        filter6.style.backgroundColor = 'white';
        filter6.classList.add('active');
    } else {
        const currentDate = new Date();
        const weekInMillis = 30 * 24 * 60 * 60 * 1000;
        const filterDate = new Date(currentDate.getTime() - weekInMillis);
        document.querySelectorAll('.income_example').forEach(block => {
            const blockDate = new Date(block.querySelector('.history_date').textContent);
            if (blockDate < filterDate) {
                block.style.display = 'none';
            } else {
                block.style.display = 'flex';
            }
        });

        filter3.style.backgroundColor = 'white';
        filter3.classList.add('active');
        filter4.style.backgroundColor = '#DADADA';
        filter4.classList.remove('active');
        filter5.style.backgroundColor = '#DADADA';
        filter5.classList.remove('active');
        filter6.style.backgroundColor = '#DADADA';
        filter6.classList.remove('active');
    }
})
filter4.addEventListener('click', () => {
    if (filter4.classList.contains('active')) {
        filter4.style.backgroundColor = '#DADADA';
        filter4.classList.remove('active');

        document.querySelectorAll('.income_example').forEach(block => {
            block.style.display = 'flex';
        });
        filter6.style.backgroundColor = 'white';
        filter6.classList.add('active');
    } else {
        const currentDate = new Date();
        const weekInMillis = 365 * 24 * 60 * 60 * 1000;
        const filterDate = new Date(currentDate.getTime() - weekInMillis);
        document.querySelectorAll('.income_example').forEach(block => {
            const blockDate = new Date(block.querySelector('.history_date').textContent);
            if (blockDate < filterDate) {
                block.style.display = 'none';
            } else {
                block.style.display = 'flex';
            }
        });

        filter4.style.backgroundColor = 'white';
        filter4.classList.add('active');
        filter3.style.backgroundColor = '#DADADA';
        filter3.classList.remove('active');
        filter5.style.backgroundColor = '#DADADA';
        filter5.classList.remove('active');
        filter6.style.backgroundColor = '#DADADA';
        filter6.classList.remove('active');
    }
})
filter5.addEventListener('click', () => {
    if (filter5.classList.contains('active')) {
        filter5.style.backgroundColor = '#DADADA';
        filter5.classList.remove('active');

        document.querySelectorAll('.income_example').forEach(block => {
            block.style.display = 'flex';
        });
        filter6.style.backgroundColor = 'white';
        filter6.classList.add('active');
    } else {
        const currentDate = new Date();
        const weekInMillis = 7 * 24 * 60 * 60 * 1000;
        const filterDate = new Date(currentDate.getTime() - weekInMillis);
        document.querySelectorAll('.income_example').forEach(block => {
            const blockDate = new Date(block.querySelector('.history_date').textContent);
            if (blockDate < filterDate) {
                block.style.display = 'none';
            } else {
                block.style.display = 'flex';
            }
        });

        filter5.style.backgroundColor = 'white';
        filter5.classList.add('active');
        filter4.style.backgroundColor = '#DADADA';
        filter4.classList.remove('active');
        filter3.style.backgroundColor = '#DADADA';
        filter3.classList.remove('active');
        filter6.style.backgroundColor = '#DADADA';
        filter6.classList.remove('active');
    }
})
filter6.addEventListener('click', () => {
    if (filter6.classList.contains('active')) {
        filter6.style.backgroundColor = '#DADADA';
        filter6.classList.remove('active');

        document.querySelectorAll('.income_example').forEach(block => {
            block.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.income_example').forEach(block => {
            block.style.display = 'flex';
        });

        filter6.style.backgroundColor = 'white';
        filter6.classList.add('active');
        filter3.style.backgroundColor = '#DADADA';
        filter3.classList.remove('active');
        filter4.style.backgroundColor = '#DADADA';
        filter4.classList.remove('active');
        filter5.style.backgroundColor = '#DADADA';
        filter5.classList.remove('active');
    }
})



incomeCross.addEventListener('click', () => {
    incomeBg.style.display = 'none';
})

expenseCross.addEventListener('click', () => {
    expenseBg.style.display = 'none';
})

switchToLogin.addEventListener('click', () => {
    entranceBg.style.display = 'flex';
    registBg.style.display = 'none';
})

switchToRegist.addEventListener('click', () => {
    registBg.style.display = 'flex';
    entranceBg.style.display = 'none';
})

incomeButton.addEventListener('click', () => {
    incomeBg.style.display = 'flex';
})

consumption_button.addEventListener('click', () => {
    expenseBg.style.display = 'flex';
})

registerBut.addEventListener('click', () => {
    if (checkInput(emailInputReg) && checkInput(passwordInputReg)) {
        if (emailInputReg.value.endsWith('@mail.ru') || emailInputReg.value.endsWith('@gmail.com')) {
            for (let i = 0; i < 100; i++) {
                if (localStorage.getItem(`email${i}`) === emailInputReg.value) {
                    validationEmailRg.innerHTML = 'E-mail уже зарегистрирован';
                    break
                }
                if (localStorage.getItem(`email${i}`) === null) {
                    localStorage.setItem(`email${i}`, emailInputReg.value);
                    if (localStorage.getItem(`password${i}`) === null) {
                        localStorage.setItem(`password${i}`, passwordInputReg.value);
                    }
                    registBg.style.display = 'none';
                    validationEmailRg.innerHTML = '';
                    initialBalance.style.display = 'flex';
                    account_number = i;
                    localStorage.setItem(`history_preservation${account_number}`, history_preservation);
                    break
                }
            };
        } else {
            validationEmailRg.innerHTML = 'Укажите свой E-mail';
        }
    } else {
        if (!checkInput(emailInputReg)) {
            validationEmailRg.innerHTML = 'Заполните поле!';
        } else {
            if (emailInputReg.value.endsWith('@mail.ru') || emailInputReg.value.endsWith('@gmail.com')) {
                validationEmailRg.innerHTML = '';
            } else {
                validationEmailRg.innerHTML = 'Укажите свой E-mail';
            }
        }
        if (!checkInput(passwordInputReg)) {
            validationPasswordRg.innerHTML = 'Заполните поле!';
        } else {
            validationPasswordRg.innerHTML = '';
        }
    }
})

loginBut.addEventListener('click', () => {
    if (checkInput(emailInput) && checkInput(passwordInput)) {
        if (emailInput.value.endsWith('@mail.ru') || emailInput.value.endsWith('@gmail.com')) {
            validationEmail.innerHTML = '';
            validationPassword.innerHTML = '';
            if (localStorage.getItem(`email0`) === null) {
                validationEmail.innerHTML = 'E-mail не зарегистрирован';
                validationPassword.innerHTML = 'Неверный пароль';
            }
            for (let i = 0; i < 100; i++) {
                if (localStorage.getItem(`email${i}`) !== null) {
                    if (localStorage.getItem(`email${i}`) === emailInput.value && localStorage.getItem(`password${i}`) === passwordInput.value) {
                        console.log('есть!');
                        balanceQuantity.innerHTML = `${localStorage.getItem(`balance${i}`)}`;
                        balance = `${localStorage.getItem(`balance${i}`)}`;
                        entranceBg.style.display = 'none';
                        account_number = i;
                        history.innerHTML = localStorage.getItem(`history_preservation${i}`);
                        break
                    }
                    if (localStorage.getItem(`email${i}`) !== emailInput.value) {
                        validationEmail.innerHTML = 'E-mail не зарегистрирован';
                    }
                    if (localStorage.getItem(`password${i}`) !== passwordInput.value) {
                        validationPassword.innerHTML = 'Неверный пароль';
                    }
                    if (localStorage.getItem(`email${i}`) === emailInput.value) {
                        validationEmail.innerHTML = '';
                        break
                    }
                }
            }
        } else {
            validationEmail.innerHTML = 'Укажите свой E-mail';
        }
    } else {
        if (!checkInput(emailInput)) {
            validationEmail.innerHTML = 'Заполните поле!';
        } else {
            if (emailInput.value.endsWith('@mail.ru') || emailInput.value.endsWith('@gmail.com')) {
                validationEmail.innerHTML = '';
            } else {
                validationEmail.innerHTML = 'Укажите свой E-mail';
            }
        }
        if (!checkInput(passwordInput)) {
            validationPassword.innerHTML = 'Заполните поле!';
        } else {
            validationPassword.innerHTML = '';
        }
    }
})

okButton.addEventListener('click', () => {
    if (checkInput(amountOfMoneyInput)) {
        if (amountOfMoneyInput.value < 99999999) {
            balance = twoDecimalPlaces(Number(amountOfMoneyInput.value));
            localStorage.setItem(`balance${account_number}`, balance);
            initialBalance.style.display = 'none';
            balanceQuantity.innerHTML = `${balance}`;
            amountOfMoneyInput.style.borderColor = 'light-dark(rgb(118, 118, 118), rgb(133, 133, 133))';
        } else {
            amountOfMoneyInput.style.borderColor = 'red';
        }
    } else {
        amountOfMoneyInput.style.borderColor = 'red';
    }
})

amountOfMoneyInput.addEventListener('keydown', function(e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '−'|| e.key === '.') {
      e.preventDefault();
    }
});

function checkInput(input) {
    if(input.value !== "") {
        return true;
    } else {
        return false;
    }
}

function twoDecimalPlaces(num) {
    return Number(num.toFixed(2));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let SetImageTime = setTimeout(function tick() {
    SetImage()
    SetImageTime = setTimeout(tick, 10000);
}, 10000);
function SetImage() {
    switch (image) {
        case 1:
            meme.setAttribute('src', `img/meme1.jpg`);
            image = getRandomInt(2, 9);
            break;
        case 2:
            meme.setAttribute('src', `img/meme2.jpg`);
            image = getRandomInt(3, 9);
            break;
        case 3:
            meme.setAttribute('src', `img/meme3.jpg`);
            image = getRandomInt(4, 9);
            break;
        case 4:
            meme.setAttribute('src', `img/meme4.jpg`);
            image = getRandomInt(5, 9);
            break;
        case 5:
            meme.setAttribute('src', `img/meme5.jpg`);
            image = getRandomInt(6, 9);
            break;
        case 6:
            meme.setAttribute('src', `img/meme6.jpg`);
            image = getRandomInt(7, 9);
            break;
        case 7:
            meme.setAttribute('src', `img/meme7.jpg`);
            image = getRandomInt(1, 9);
            break;
        case 8:
            meme.setAttribute('src', `img/meme8.jpg`);
            image = getRandomInt(1, 9);
            break;
        case 9:
            meme.setAttribute('src', `img/meme9.jpg`);
            image = getRandomInt(1, 9);
            break;
    }
}

let expenseFieldCategory = document.querySelector('.expense_field_category');
let expenseDescriptionField = document.querySelector('.expense_description_field');
let expenseDateField = document.querySelector('.expense_date_field');
let expenseAmountInput = document.querySelector('.expense_amount_input');
let submitExpenseButton = document.querySelector('.submit_expense_button');

expenseAmountInput.addEventListener('keydown', function(e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '−'|| e.key === '.') {
      e.preventDefault();
    }
});

submitExpenseButton.addEventListener('click', () => {
    if (checkInput(expenseFieldCategory)) {
        expenseFieldCategory.style.borderColor = 'black';
        if (checkInput(expenseDateField)) {
            expenseDateField.style.borderColor = 'black';
            if (checkInput(expenseAmountInput)) {
                expenseAmountInput.style.borderColor = 'black';
                if (expenseAmountInput.value < 99999999) {
                    balance = twoDecimalPlaces(Number(balance - twoDecimalPlaces(Number(expenseAmountInput.value))));
                    localStorage.setItem(`balance${account_number}`, balance);
                    balanceQuantity.innerHTML = `${balance}`;
                    expenseBg.style.display = 'none';
                    expenseAmountInput.style.borderColor = 'black';

                    
                    let specimen = document.createElement('div');
                    history.appendChild(specimen);
                    specimen.innerHTML = `
                    <div class="${dateField.value} income_example history_of_consumption_block">
                        <div class="history_information">
                            <div class="category_in_history_wrapper">
                                ${expenseFieldCategory.value}
                            </div>
                            <div class="description_in_history_wrapper">
                                ${expenseDescriptionField.value}
                                <div class="history_date">
                                    ${expenseDateField.value}
                                </div>
                            </div>
                        </div>
                        <div class="money_wrapper">
                            <div class="amount_of_money">
                                ${twoDecimalPlaces(Number(expenseAmountInput.value))}
                            </div>
                            <div class="arrow arrow_consumption">
                                <img class="cross_history" src="img/cross.png" alt="cross">
                                ↓
                            </div>
                        </div>
                    </div>
                    `;
                    if (filter3.classList.contains('active')) {
                        const currentDate = new Date();
                        const weekInMillis = 30 * 24 * 60 * 60 * 1000;
                        const filterDate = new Date(currentDate.getTime() - weekInMillis);
                        document.querySelectorAll('.income_example').forEach(block => {
                            const blockDate = new Date(block.querySelector('.history_date').textContent);
                            if (blockDate < filterDate) {
                                block.style.display = 'none';
                            } else {
                                block.style.display = 'flex';
                            }
                        });
                    }
                    if (filter5.classList.contains('active')) {
                        const currentDate = new Date();
                        const weekInMillis = 7 * 24 * 60 * 60 * 1000;
                        const filterDate = new Date(currentDate.getTime() - weekInMillis);
                        document.querySelectorAll('.income_example').forEach(block => {
                            const blockDate = new Date(block.querySelector('.history_date').textContent);
                            if (blockDate < filterDate) {
                                block.style.display = 'none';
                            } else {
                                block.style.display = 'flex';
                            }
                        });
                    }
                    if (filter6.classList.contains('active')) {
                        document.querySelectorAll('.income_example').forEach(block => {
                            block.style.display = 'flex';
                        });
                    }
                    history_preservation = history.innerHTML;
                    localStorage.setItem(`history_preservation${account_number}`, history_preservation);
                    balanceQuantity.innerHTML = `${twoDecimalPlaces(Number(balance * rate))}`;

                    dateSorting();
                    if (!filter2.classList.contains('active')) {
                        historyOfConsumptionBlock = document.querySelectorAll('.history_of_consumption_block');
                        historyOfConsumptionBlock.forEach(block => {
                            block.style.display = 'none';
                        });
                    }
                } else {
                    expenseAmountInput.style.borderColor = 'red';
                }
            }
        }
    } else {
        expenseFieldCategory.style.borderColor = 'red';
    }
    if (checkInput(expenseDateField)) {
        expenseDateField.style.borderColor = 'black';
    } else {
        expenseDateField.style.borderColor = 'red';
    }
    if (checkInput(expenseAmountInput)) {
        expenseAmountInput.style.borderColor = 'black';
    } else {
        expenseAmountInput.style.borderColor = 'red';
    }
})

let fieldCategory = document.querySelector('.field_category');
let descriptionField = document.querySelector('.description_field');
let dateField = document.querySelector('.date_field');
let incomeAmountInput = document.querySelector('.income_amount_input');
let submitIncomeButton = document.querySelector('.submit_income_button');

incomeAmountInput.addEventListener('keydown', function(e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '−'|| e.key === '.') {
      e.preventDefault();
    }
});

submitIncomeButton.addEventListener('click', () => {
    if (checkInput(fieldCategory)) {
        fieldCategory.style.borderColor = 'black';
        if (checkInput(dateField)) {
            dateField.style.borderColor = 'black';
            if (checkInput(incomeAmountInput)) {
                incomeAmountInput.style.borderColor = 'black';
                if (incomeAmountInput.value < 99999999) {
                    balance = twoDecimalPlaces(Number(balance + twoDecimalPlaces(Number(incomeAmountInput.value))));
                    localStorage.setItem(`balance${account_number}`, balance);
                    balanceQuantity.innerHTML = `${balance}`;
                    incomeBg.style.display = 'none';
                    incomeAmountInput.style.borderColor = 'black';


                    let specimen = document.createElement('div');
                    history.appendChild(specimen);
                    specimen.innerHTML = `
                    <div class="${dateField.value} income_example income_history_block">
                        <div class="history_information">
                            <div class="category_in_history_wrapper">
                                ${fieldCategory.value}
                            </div>
                            <div class="description_in_history_wrapper">
                                ${descriptionField.value}
                                <div class="history_date">
                                    ${dateField.value}
                                </div>
                            </div>
                        </div>
                        <div class="money_wrapper">
                            <div class="amount_of_money">
                                ${twoDecimalPlaces(Number(incomeAmountInput.value))}
                            </div>
                            <div class="arrow arrow_income">
                                <img class="cross_history" src="img/cross.png" alt="cross">
                                ↑
                            </div>
                        </div>
                    </div>
                    `;
                    if (filter3.classList.contains('active')) {
                        const currentDate = new Date();
                        const weekInMillis = 30 * 24 * 60 * 60 * 1000;
                        const filterDate = new Date(currentDate.getTime() - weekInMillis);
                        document.querySelectorAll('.income_example').forEach(block => {
                            const blockDate = new Date(block.querySelector('.history_date').textContent);
                            if (blockDate < filterDate) {
                                block.style.display = 'none';
                            } else {
                                block.style.display = 'flex';
                            }
                        });
                    }
                    if (filter5.classList.contains('active')) {
                        const currentDate = new Date();
                        const weekInMillis = 7 * 24 * 60 * 60 * 1000;
                        const filterDate = new Date(currentDate.getTime() - weekInMillis);
                        document.querySelectorAll('.income_example').forEach(block => {
                            const blockDate = new Date(block.querySelector('.history_date').textContent);
                            if (blockDate < filterDate) {
                                block.style.display = 'none';
                            } else {
                                block.style.display = 'flex';
                            }
                        });
                    }
                    if (filter6.classList.contains('active')) {
                        document.querySelectorAll('.income_example').forEach(block => {
                            block.style.display = 'flex';
                        });
                    }
                    history_preservation = history.innerHTML;
                    localStorage.setItem(`history_preservation${account_number}`, history_preservation);
                    balanceQuantity.innerHTML = `${twoDecimalPlaces(Number(balance * rate))}`;

                    dateSorting();
                    if (!filter1.classList.contains('active')) {
                        incomeHistoryBlock = document.querySelectorAll('.income_history_block');
                        incomeHistoryBlock.forEach(block => {
                            block.style.display = 'none';
                            console.log('нету');
                        });
                    }
                } else {
                    incomeAmountInput.style.borderColor = 'red';
                }
            }
        }
    } else {
        fieldCategory.style.borderColor = 'red';
    }
    if (checkInput(dateField)) {
        dateField.style.borderColor = 'black';
    } else {
        dateField.style.borderColor = 'red';
    }
    if (checkInput(incomeAmountInput)) {
        incomeAmountInput.style.borderColor = 'black';
    } else {
        incomeAmountInput.style.borderColor = 'red';
    }
})

function dateSorting() {
    const historyItems = Array.from(history.children);

    historyItems.sort((a, b) => {
        const dateA = new Date(a.querySelector('.history_date').textContent);
        const dateB = new Date(b.querySelector('.history_date').textContent);
        return dateA - dateB;
    });

    historyItems.forEach(item => {
        history.appendChild(item);
    });
}



let currencySelection = document.querySelector('.currency_selection');
let rate = 1;

currencySelection.addEventListener('change', function() {
    let selectedCurrency = currencySelection.value;
    
    switch(selectedCurrency) {
        case 'USD':
            rate = 0.31;
            break;
        case 'Euro':
            rate = 0.29;
            break;
        case 'RUB':
            rate = 28.76;
            break;
        case 'BYN':
            rate = 1;
            break;
    }
    
    balanceQuantity.innerHTML = `${twoDecimalPlaces(Number(balance * rate))}`;
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('cross_history')) {
        const parentBlock = event.target.closest('.income_example');
        if (parentBlock) {
            parentBlock.remove();
        }
    }
    history_preservation = history.innerHTML;
    localStorage.setItem(`history_preservation${account_number}`, history_preservation);
});