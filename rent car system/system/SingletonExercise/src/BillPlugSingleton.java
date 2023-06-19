public class BillPlugSingleton {

    private BillPlugSingleton(){

    }

    private static class Helper{
        private static final BillPlugSingleton bps=new BillPlugSingleton();
    }

    public static BillPlugSingleton getInstance(){
        return Helper.bps;
    }

    public void showMessage(){
        System.out.println("Hello from Billplug singleton..");
    }
}
