import java.util.*;
import java.util.Scanner;

public class Ebill {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int unit = sc.nextInt();
        double amt = 0;

        if (unit > 400) {
            amt = (unit - 400) * 13;
            unit = 400;
        }
        if (unit >= 201 && unit <= 400) {
            amt += (unit - 200) * 8;
            unit = 200;
        }
        if (unit >= 101 && unit <= 200) {
            amt += (unit - 100) * 6;
            unit = 100;
        }
        if (unit <= 100) {
            amt += unit * 4.2;

        }
        System.out.println(amt);

    }
}
