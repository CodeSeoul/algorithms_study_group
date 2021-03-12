package main

import "fmt"

func main() {
	fmt.Println("==================")
	fmt.Println("==Running Test 1==")
	fmt.Println("==================")
	if missingNumber([]int{3, 0, 1}) != 2 {
		panic("Test 1 failed")
	}

	fmt.Println("==================")
	fmt.Println("==Running Test 2==")
	fmt.Println("==================")
	if missingNumber([]int{0, 1}) != 2 {
		panic("Test 2 failed")
	}

	fmt.Println("==================")
	fmt.Println("==Running Test 3==")
	fmt.Println("==================")
	if missingNumber([]int{9,6,4,2,3,5,7,0,1}) != 8 {
		panic("Test 3 failed")
	}

	fmt.Println("==================")
	fmt.Println("==Running Test 4==")
	fmt.Println("==================")
	if missingNumber([]int{0}) != 1 {
		panic("Test 4 failed")
	}
}

func missingNumber(nums []int) int {
	//return method1(nums)
	return method2(nums)
}

func method1(nums []int) int {
	for n := 0; n < len(nums); n++ {
		found := false
		fmt.Printf("Checking %d\n", n)
		for _, num := range nums {
			if n == num {
				found = true
				fmt.Println("Found!")
				break
			}
		}
		if !found {
			return n
		}
	}
	return len(nums)
}

func method2(nums []int) int {
	flags := make([]bool, len(nums)+1)
	for _, num := range nums {
		flags[num] = true
	}
	for idx, val := range flags {
		if val == false {
			return idx
		}
	}
	return len(nums)
}
