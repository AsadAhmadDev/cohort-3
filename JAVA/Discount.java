import java.util.Scanner;

public class Discount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        /* write your code here */
        int amt = sc.nextInt();
        int dis;
        if (amt >= 0 && amt <= 5000) {
             dis = 0;
        }
       else if (amt >= 5001 && amt <= 7000) {
            dis  = 5;
        }
        else if (amt >= 7001 && amt <= 9000) {
            dis = 10;
        }
        else if (amt >= 9001) {
            dis = 20;
        }
        else {
            dis = 0;
        }
        int disAmt = (dis * amt)/100;
        System.out.println(amt - disAmt);

    }
}