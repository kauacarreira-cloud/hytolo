// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos da interface
    const navButtons = document.querySelectorAll('.nav-btn');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const ovalContent = document.querySelector('.oval-content');
    const mainProfile = document.querySelector('.main-profile');
    
    // Conteúdo para diferentes seções
    const content = {
        sobre: {
            title: 'SOBRE MIM',
            subtitle: 'Desenvolvedor & Designer',
            text: 'Especialista em desenvolvimento web e design digital'
        },
        contato: {
            title: 'FALE CONOSCO',
            subtitle: 'Entre em contato',
            text: 'Vamos conversar sobre seu próximo projeto'
        },
        portfolio: {
            title: 'PORTFÓLIO',
            subtitle: 'Meus Trabalhos',
            text: 'Confira alguns dos meus projetos mais recentes'
        },
        projetos: {
            title: 'PROJETOS',
            subtitle: 'Desenvolvimento',
            text: 'Soluções inovadoras e criativas'
        },
        habilidades: {
            title: 'HABILIDADES',
            subtitle: 'Tecnologias',
            text: 'JavaScript, HTML, CSS, React, Node.js'
        }
    };
    
    // Função para atualizar o conteúdo principal
    function updateMainContent(section) {
        const sectionContent = content[section];
        if (sectionContent) {
            mainProfile.innerHTML = `
                <img src="images/hytalo-main.jpg" alt="Hytalo Santos" class="main-profile-img">
                <h2>${sectionContent.title}</h2>
                <p>${sectionContent.subtitle}</p>
            `;
            
            // Adiciona animação de entrada
            mainProfile.style.opacity = '0';
            mainProfile.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                mainProfile.style.transition = 'all 0.5s ease';
                mainProfile.style.opacity = '1';
                mainProfile.style.transform = 'scale(1)';
            }, 100);
        }
    }
    
    // Event listeners para botões de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.toLowerCase();
            
            // Remove classe ativa de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe ativa ao botão clicado
            this.classList.add('active');
            
            // Atualiza conteúdo baseado no botão
            if (buttonText === 'sobre') {
                updateMainContent('sobre');
            } else if (buttonText === 'fale conosco') {
                updateMainContent('contato');
            }
            
            // Efeito visual de clique
            this.style.transform = 'translateY(-3px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
        
        // Efeitos de hover aprimorados
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Event listeners para itens da sidebar
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove classe ativa de todos os itens
            sidebarItems.forEach(i => i.classList.remove('active-sidebar'));
            
            // Adiciona classe ativa ao item clicado
            this.classList.add('active-sidebar');
            
            // Define seções baseadas na posição (0-5 para os 6 itens)
            const sections = ['portfolio', 'projetos', 'habilidades', 'contato', 'sobre', 'projetos'];
            const section = sections[index];
            
            if (section) {
                updateMainContent(section);
            }
            
            // Efeito de rotação no clique
            this.style.transform = 'translateY(-5px) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) rotate(0deg)';
            }, 200);
        });
        
        // Efeito de brilho nos itens da sidebar
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 30px rgba(192, 132, 252, 0.4)';
            
            const img = this.querySelector('.sidebar-img');
            if (img) {
                img.style.filter = 'brightness(1.2) saturate(1.3)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            
            const img = this.querySelector('.sidebar-img');
            if (img) {
                img.style.filter = 'brightness(1) saturate(1)';
            }
        });
    });
    
    // Efeito de paralaxe nos pontos flutuantes
    document.addEventListener('mousemove', function(e) {
        const floatingDots = document.querySelectorAll('.floating-dot');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        floatingDots.forEach((dot, index) => {
            const speed = (index + 1) * 0.5;
            const xOffset = (x - 0.5) * speed * 20;
            const yOffset = (y - 0.5) * speed * 20;
            
            dot.style.transform = translate(${xOffset}px, ${yOffset}px);
        });
    });
    
    // Efeito de respiração no oval principal
    let breatheScale = 1;
    let breatheDirection = 1;
    
    function breatheEffect() {
        breatheScale += breatheDirection * 0.002;
        
        if (breatheScale >= 1.03) {
            breatheDirection = -1;
        } else if (breatheScale <= 0.97) {
            breatheDirection = 1;
        }
        
        const oval = document.querySelector('.main-oval');
        if (oval) {
            oval.style.transform = scale(${breatheScale});
        }
        
        requestAnimationFrame(breatheEffect);
    }
    
    // Inicia o efeito de respiração
    breatheEffect();
    
    // Adiciona estilos CSS dinâmicos
    const dynamicStyles = `
        .nav-btn.active {
            background: linear-gradient(135deg, #c084fc, #a855f7) !important;
            color: white !important;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4) !important;
        }
        
        .sidebar-item.active-sidebar {
            background: rgba(255, 255, 255, 0.3) !important;
            transform: translateY(-5px) !important;
            box-shadow: 0 12px 30px rgba(192, 132, 252, 0.5) !important;
        }
        
        .sidebar-img {
            transition: all 0.3s ease;
        }
    `;
    
    // Injeta estilos dinâmicos
    const styleSheet = document.createElement('style');
    styleSheet.textContent = dynamicStyles;
    document.head.appendChild(styleSheet);
    
    // Animação de entrada inicial
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 100);
    
    // Aplica estilos de entrada inicial
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(20px)';
    document.querySelector('.container').style.transition = 'all 0.8s ease';
    
    console.log('Interface Hytalo Santos carregada com sucesso!');
});