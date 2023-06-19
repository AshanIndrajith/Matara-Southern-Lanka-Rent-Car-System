public class EagerSingleton {

    private static EagerSingleton es=new EagerSingleton();

    public EagerSingleton() {
    }

    public static EagerSingleton getInstance(){
        return es;
    }

    public void showMessage(){
        System.out.println("Hello from Eager singleton");
    }
}
