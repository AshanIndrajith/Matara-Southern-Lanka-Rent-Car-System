public class ThreadSafeSingleton {
    private static ThreadSafeSingleton tss;

    public ThreadSafeSingleton() {
    }

    public static synchronized ThreadSafeSingleton getInstance(){
        if(tss==null){
           tss=new ThreadSafeSingleton();
        }
        return tss;
    }

    public void showMessage(){
        System.out.println("Hello from Thread Safe singleton..");
    }
}
