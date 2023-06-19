public class StaticSingleton {

    private static StaticSingleton ss;

    public StaticSingleton() {
    }

    static {
        try {
            ss=new StaticSingleton();
        }catch (Exception e){
            throw new RuntimeException("exception occure while creating object");
        }
    }

    public static StaticSingleton getInstance(){
        return ss;
    }

    public void showMessage(){
        System.out.println("Hello from static singleton..");
    }
}
