import { TiHeart } from "react-icons/ti";

const AppFooter = () => {
  return (
    <footer className="main-layout font-mono">
      <div className="py-4 flex flex-col text-sm text-muted-foreground justify-center items-center flex-wrap gap-2 border-t">
        <div className="flex gap-1">
          <p>Crafted with</p>
          <TiHeart className="text-green-300 text-xl" />
          <p>
            by
            <span className="font-playwrite text-sm"> Nikhil Daivanapally</span>
          </p>
        </div>
        <p>@ 2025 All Right Reserved,</p>
      </div>
    </footer>
  );
};

export default AppFooter;
