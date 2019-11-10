//BUDGET CONTROLLER
var budgetController = (function(){//module
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }
    var data = {
        Allitems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1,
    }
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome>0){
            this.percentage = Math.round((this.value / totalIncome)*100) ;
        } else{
            this.percentage = -1;
        }
    }
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    var calculateTotal = function(type){
        var sum = 0;
        data.Allitems[type].forEach(function(cur){
            sum +=cur.value;
        });
        data.totals[type]=sum;
    }

    return {
        addItems: function(type, des, val){
            var newItem, ID;
            //have id make easily delete
            if(data.Allitems[type].length === 0){
                ID =0;
            } else{ 
                ID = data.Allitems[type][data.Allitems[type].length-1].id + 1;
            }   
            //create newItem depend on type
            if(type==='exp'){
                newItem = new Expense(ID,des,val);
            }else{
                newItem = new Income(ID,des,val);
            }

            data.Allitems[type].push(newItem);

            return newItem;
        },

        deleteItems: function(type, id){
            var ids, index;
            ids = data.Allitems[type].map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            if(index !== -1){
                data.Allitems[type].splice(index,1);
            }

        },

        calculateBudget: function(){
            //calculate total income, expense.
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate budget income - expense
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income that we spent
            if(data.totals.inc>0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc)*100) ;
            } else{
                data.percentage = -1;
            }
        },
        calculatePercentages: function(){
            data.Allitems.exp.forEach(function(cur){//for each can not return
                cur.calcPercentage(data.totals.inc); 
            });
        },
        getPercentages: function(){
            var Percentages = data.Allitems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return Percentages;
        },
        getBudget: function(){
            return {
                totalbudget: data.budget,
                totalExp: data.totals.exp,
                totalInc: data.totals.inc,
                totalpercentage: data.percentage,
            }
        },
        testing: function(){
            console.log(data);
        }
    }

})();

//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = { // to change code in the future easier
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBTN: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        displayBudget: '.budget__value',
        displayIncome: '.budget__income--value',
        displayExpense: '.budget__expenses--value',
        displayPercentage: '.budget__expenses--percentage',
        container:  '.container',
        exp_percentage: '.item__percentage',
        dateLabel: '.budget__title--month'
    }
    var floatNumber = function(num, type) {
        var numSplit,int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        dec = numSplit[1];
        if(int.length>3){
            int = int.substr(0, int.length-3) + ',' +int.substr(int.length - 3, 3);
        }
        return (type ==='exp' ? '-' :  '+') + int+'.'+dec;
    };
    
    var nodeListforEach = function(list,callback){
        for(var i =0;i<list.length;i++)
            callback(list[i],i);
    };
    return {//public
        getInput: function(){
            return {
                type :document.querySelector(DOMstrings.inputType).value,//read vakye of add_type //will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        addListItem: function(obj,type){
            var html, newHtml, element;
            //create html with placeholder text
            if(type === 'exp'){
                html ='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                element = DOMstrings.expenseContainer;
            } else if(type === 'inc'){
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                element = DOMstrings.incomeContainer;
            }
            //replace the placeholder text with some atual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',floatNumber(obj.value,type));
            //console.log(newHtml);
            //console.log(element);
            //insert html to the dom
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

        },
        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },

        clearFields: function(){

            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);//convert list to array. 

            fieldsArr.forEach(function(current, index, array){//convert array to ["",""]
                current.value = "";
            });

            fieldsArr[0].focus();

        },
        displayBudget: function(obj){
            var type ;
            obj.totalbudget>=0 ? type ='inc' : type = 'exp';
            document.querySelector(DOMstrings.displayBudget).textContent = floatNumber(obj.totalbudget,type);
            document.querySelector(DOMstrings.displayExpense).textContent = floatNumber(obj.totalExp,'exp');
            document.querySelector(DOMstrings.displayIncome).textContent = floatNumber(obj.totalInc);
            if(obj.totalpercentage>0){
                document.querySelector(DOMstrings.displayPercentage).textContent = obj.totalpercentage + '%';
            }else {
                document.querySelector(DOMstrings.displayPercentage).textContent = "---";   
            }

        },
        displayPercentages: function(percentages){

            var fields = document.querySelectorAll(DOMstrings.exp_percentage);

            nodeListforEach(fields, function(current,index){
                if(percentages[index]>0){
                    current.textContent = percentages[index] + '%';
                }else {
                    current.textContent ='---';
                }

            });

        },
        displayMonth: function(){
            var now, month,year;
            now = new Date();

            months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent =months[month] + ' ' + year;
        },
        changeType: function(){
            var fields = document.querySelectorAll(
                DOMstrings.inputType +',' +
                DOMstrings.inputDescription+ ',' +
                DOMstrings.inputValue);
            
            nodeListforEach(fields, function(cur){
               cur.classList.toggle('red-focus'); 
            });
            document.querySelector(DOMstrings.inputBTN).classList.toggle('red');
        },
        getDOMString: function(){
            return DOMstrings;
        },

    }
})();

//GLOBAL APP CONTROLLER
// "." mean class
var controller = (function(budgetCtrl, UICtrl){
    //only event listenner
    var setupEventListenner = function(){
        var DOM = UICtrl.getDOMString();
        document.querySelector(DOM.inputBTN).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress' , function(event){
            if(event.keyCode === 13 || event.which === 13){//which for older browser
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changeType);


    }

    var updateBudget = function(){
        //1. calculate the budget
        budgetCtrl.calculateBudget();
        //2. return the budget
        var budget = budgetCtrl.getBudget();
        //console.log(budget);
        //3. display the budget on the UI;
        UICtrl.displayBudget(budget);
    }

    var updatePercentage = function()   {
        //1. calculate the percentages
        budgetCtrl.calculatePercentages ();
        //2. read percentages from the controller
        var Percentages = budgetCtrl.getPercentages();
        console.log(Percentages);
        //3. display the percentage on the UI
        UICtrl.displayPercentages(Percentages);
    }

    //add item
    var ctrlAddItem = function(){
        //1. get the filled input data
        var input = UICtrl.getInput();

        if(input.description !=="" && !isNaN(input.value) && input.value !== 0)
        {
            //2. add item to the budget controller
            newItem = budgetController.addItems(input.type,input.description,input.value);

            //3. add item to the user interfeace UI
            UICtrl.addListItem(newItem,input.type);

            //4. clearing Fields
            UICtrl.clearFields();

            //5. Calculate the budget and display the budget on the UI
            updateBudget();

            //6. calculate the percentage and display the percentage on the UI
            updatePercentage();
        }
    };
    var ctrlDeleteItem = function(event){
        var itemID, splitID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1. delete the item from data structure

            budgetCtrl.deleteItems(type,ID);
            //2. delete item from UI
            UICtrl.deleteListItem(itemID);
            //3. update and show new budget
            updateBudget();

            //4. calculate the percentage and display the percentage on the UI
            updatePercentage();
        }
    };
    return{
        init: function(){
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                totalbudget: 0,
                totalExp: 0,
                totalInc: 0,
                totalpercentage: -1,
            });
            setupEventListenner();
            console.log("every works");
        }
    }

})(budgetController, UIController);

controller.init();

















