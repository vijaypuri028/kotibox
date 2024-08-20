import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeComponent() {
  const heading1 = "Our Trusted Clients";

  return (
    <>
      <div className='text  pb-2 mt-5'>
        <h3 className='text-center text-light'>{heading1}</h3>
        <div className="loop mt-3">
          <div style={{ width: "100%" }} className="marquee">
            <Marquee speed={60} gradient={false}>
              <img src="https://images-workbench.99static.com/SFZs48ErDXgRZLqbaKy5Lvt9M2E=/99designs-contests-attachments/58/58600/attachment_58600184" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://images-workbench.99static.com/9FFhJYRQsHrcPmfClHW3xoR8Pvo=/99designs-contests-attachments/133/133258/attachment_133258495" alt="Google"style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://images-workbench.99static.com/KK-1T5tJIJxBf9uCUKY-MuoUpQY=/99designs-contests-attachments/117/117363/attachment_117363058" alt="Facebook" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://images-workbench.99static.com/fthjGw5lwxeXb8mB3CThmWHkEzY=/http://s3.amazonaws.com/projects-files/34/3436/343659/90a7fa05-0665-49f0-80b1-4ceeb75b7d00.jpg" alt="Dell" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://images-workbench.99static.com/QDlGEi9ACAkQgGLB0K1VcQEVUBE=/http://s3.amazonaws.com/projects-files/18/1808/180803/cf8acfef-d5a1-5653-31e6-5845c823e97a.png" alt="Dell" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://www.shutterstock.com/shutterstock/photos/2258541461/display_1500/stock-vector-oval-shape-vector-food-company-logo-design-template-ideal-for-agriculture-organic-food-grocery-2258541461.jpg" alt="Dell" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://images-workbench.99static.com/SFZs48ErDXgRZLqbaKy5Lvt9M2E=/99designs-contests-attachments/58/58600/attachment_58600184" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://www.shutterstock.com/shutterstock/photos/2484704789/display_1500/stock-vector-oval-rectangle-shape-vector-green-food-company-logo-design-template-ideal-for-agriculture-organic-2484704789.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://www.logolynx.com/images/logolynx/20/2043aa2034232d6b02b3ecd8cad8a287.jpeg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://i.pinimg.com/originals/0a/36/a3/0a36a343f05dc75fd32839c00065872d.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://static.vecteezy.com/system/resources/previews/021/433/431/original/jewelry-logo-design-ring-with-diamond-logotype-elegant-modern-jewelry-store-logo-template-vector.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://tryfusionmarketing.com/wp-content/uploads/2022/05/Fusion-Marketing-10-Popular-Insurance-Company-Logos-and-What-Makes-Them-Work-Logo-scaled.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://static.vecteezy.com/system/resources/previews/015/259/493/original/business-consulting-services-logo-design-vector.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              <img src="https://i.pinimg.com/originals/0a/36/a3/0a36a343f05dc75fd32839c00065872d.jpg" alt="Amazon" style={{ width: '100px', height:"90px", marginRight: '20px' }} />
              
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
