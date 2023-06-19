public class LazyInitialization {

    private static LazyInitialization ls;

    public LazyInitialization() {
    }

    public static LazyInitialization getInstance(){
        if(ls==null){
            ls=new LazyInitialization();
        }
        return ls;
    }

    public void showMessage(){
        System.out.println("Hello from Lazy singleton..");
    }
}
