package Democode;

public class SparseArray{

    public static void main(String[] args){
        //先创建一个元素的二维数组 11x11大小
        //0：表示没有棋子，1表示黑棋，2表示蓝棋
        int chessArr1[][] = new int[11][11];
        chessArr1[1][2] = 1;
        chessArr1[2][3] = 2;
        chessArr1[2][4] = 2;
        //输出原始的二维数组
        System.out.println ("-----原始的二维数组-----");
        for(int[] row : chessArr1){
            for(int data : row) {
                System.out.printf ("%d\t",data);
            }
            System.out.println ();
        }

        //将二维数组传成位稀疏数组
        //1. 先遍历二位数组，得到非0数据的个数
        int sum = 0;
        for (int i = 0;i < chessArr1.length;i++){
            for(int j = 0;j < chessArr1.length;j++){
                if(chessArr1[i][j]!=0){
                    sum++;
                }
            }
        }
        System.out.println("sum="+sum);

        //2. 创建对应的稀疏数组
        int sparseArray[][]=new int[sum+1][3];
        //给稀疏数组赋值
        sparseArray[0][0] = 11;
        sparseArray[0][1] = 11;
        sparseArray[0][2] = sum;

        //遍历二位数组，将非0的值存放到稀疏数组
        int count = 0 ;//count用于记录是第几个 非0数据
        for (int i = 0;i < chessArr1.length;i++){
            for(int j = 0;j < chessArr1.length;j++){
                if(chessArr1[i][j]!=0){
                    count++;
                    sparseArray[count][0] = i;
                    sparseArray[count][1] = j;
                    sparseArray[count][2] = chessArr1[i][j];
                }
            }
        }
        //输出稀疏数组的形式
        System.out.println ();
        System.out.println ("----得到的稀疏数组为----");
        for(int i = 0;i < sparseArray.length;i++){
            System.out.printf ("%d\t%d\t%d\t\n",sparseArray[i][0],sparseArray[i][1],sparseArray[i][2]);
        }
        System.out.println ();

        //将稀疏数组恢复成原始的二维数组
        //1.先读取稀疏数组的第一行，根据第一行的数据，创建原始的二维数组，比如上面的 chessArr2 = int[11][11]

        int chessArr2[][] = new int[sparseArray[0][0]][sparseArray[0][1]];
        //恢复后的二维数组（全0的）
        System.out.println ("----恢复后的二维数组----");

        for(int[] row : chessArr2){
            for(int data : row) {
                System.out.printf ("%d\t",data);
            }
            System.out.println ();
        }

        //2.在读取稀疏数组后几行的数据，并赋值给原始的二维数组即可
        //2.1 从第二行开始，第一行存的是，行，列，和有效个数，所以i=1
        for(int i = 1;i<sparseArray.length;i++){
            chessArr2[sparseArray[i][0]] [sparseArray[i][1]] = sparseArray[i][2];
            //[i][0],i里面的第1列，是它的行 row
            //[i][1],i里面的第2列，是它的列 col
            //[i][2],i里面的第3列，是它的value val
        }

        System.out.println ("----恢复后的二维数组----");

        for(int[] row : chessArr2){
            for(int data : row) {
                System.out.printf ("%d\t",data);
            }
            System.out.println ();
        }


    }
}
