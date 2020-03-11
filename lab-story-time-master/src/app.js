//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
    function Karenshome(address,distanceFromTown,hasNeighbours)
        {
        let temp=typeof(address);
        let temp1=typeof(distanceFromTown);
        let temp2=typeof(hasNeighbours);
        return temp+temp1+temp2;
       }

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

    function Karen(parents,noOfSiblings,isNuclearFamily){
        let a=typeof parents;
        let b=typeof noOfSiblings;
        let c=typeof isNuclearFamily;
        if((a=="string") && (b=="number") && (c=="boolean"))
        {
            return true;
        }
        
        else
        return false;
    }

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

   function karennewfriendenter(ageText, ageNumber){

        if(ageText=="NaN")
        {
            return ageText;
        }
            
        else if(ageNumber=="NaN")
            {
                return ageNumber;
            }
        else return NaN;
    }

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

    function karenxsweets(totalsweets, karenconsumed, nmeterssweetconsumed, meterstravel)
        {
           let a,b;
           l=totalsweets- karenconsumed;
           if((nmeterssweetconsumed*meterstravel)<=l)
           {
               l=l-(nmeterssweetconsumed*meterstravel);
               return l/2;
           }
           else 
           return "No sweets available";
        }


//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

    function convertdatatocelsius(fahrenheit)
    {
        let a = typeof fahrenheit;
    
        return  (fahrenheit - 32) * 5 / 9;
        }

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function multiplethings(choice){
    let c;
    if (choice == -1)
       return "god bless you";

    else {
        var a = typeof choice;
        if (a == "undefined")
            return "not able to make a decision";
        if (choice == "I give up")
            return "no chance to do anything for karen";
    }
    switch (choice) {
        case 1: c = "Take her daughter to a doctor";
            break;
        case 2: c = "Talk to her husband about it";
            break;
        case 3: c = "Counsel her daughter herself";
            break;
     case 4: c = "Lock her daughter in her room";
          break;
      default: c = nothing;
        break;
 }
    return c;

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function console(strategy)
{
        let a = "";
        for (var i = 0; i < strategy.length; i++)
        a = a + strategy[i] + " ";
        var b = a.length - 1;
        return b;
}