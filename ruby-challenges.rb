# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# OLD PSUEDOCODE:
# create method named letter_matcher
    # takes in an array of words and a single letter
# create a for loop
    # use select? method to check if single letter appears in each index
    # if true, print that word
    # if false, dont' print
# return values

# NEW PSUEDOCODE:
# use select? method for each index
# if i.include? has the letter in it, print the index
# I think I was overthinking it before

beverages_array.select do |i|
   if i.include? letter_o 
    p i
   end
end

# beverages_array(letter_o)

# # result: "coffee", "soda water"


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# PSUEDOCODE:
# start at 0
# for the length of the array, add each index to the next
# method => .each ? or .sum ?
#  return

def summed_up array
    # current_total = 0
    array.sum
end

p summed_up(nums_array1) #result = 76
p summed_up(nums_array2) #result = 100



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = '2'
        @current_speed = 0
    end

    def pedal_faster num
        @current_speed += num
    end
    
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is traveling at #{@current_speed} mph."
    end

    # def slowing_down
        
    # end
end

p vroom = Bike.new('Huffy','2', 20).bike_info
vroom.pedal_faster(5)
p vroom


# result = "The Huffy bike has 2 wheels and is traveling at 20 mph."
#<Bike:0x00007fefc68d2198 @model="Huffy", @wheels="2", @current_speed=nil>


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
